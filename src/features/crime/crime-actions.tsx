'use server'
import { CrimeProps, OutcomeProps } from "@/types";
import z from "zod";
import { stolenReportSchema } from "./crime-validators";
import { db } from "@/lib/db";

const polygon = "52.69,-1.67:52.62,-1.52:52.57,-1.72:52.65,-1.84";
const force = "staffordshire";

export async function getAllCrimesAction() {

  const [data1, data2, data3] = await Promise.all([
    fetch(`https://data.police.uk/api/crimes-street/all-crime?poly=${polygon}`),
    fetch(`https://data.police.uk/api/outcomes-at-location?poly=${polygon}`),
    fetch("https://data.police.uk/api/crime-last-updated")

  ])

  if (!data1.ok) {
    return { success: false, message: 'Failed to load crimes' }
  }

  if (!data2.ok) {
    return { success: false, message: 'Failed to load outcomes' }
  }

  if (!data3.ok) {
    return { success: false, message: 'Failed to load date' }
  }

  const crimes = await data1.json()
  const outcomes = await data2.json()
  const lastUpdated = await data3.json()

  const merged = crimes.map((crime: CrimeProps) => {
    const outcome = outcomes.find((o: OutcomeProps) => String(o.crime.persistent_id) === String(crime.persistent_id))
    return {
      ...crime,
      outcome_status: outcome ? { code: outcome.category.code, name: outcome.category.name } : null
    }
  })

  return { success: true, merged, lastUpdated }
}

export async function getAllStopSearchAction() {

  const [data1, data2] = await Promise.all([
    fetch(`https://data.police.uk/api/stops-street?poly=${polygon}`),
    fetch("https://data.police.uk/api/crime-last-updated")
  ])

  if (!data1.ok) return { success: false, message: 'Failed to lload data' }
  if (!data2.ok) return { success: false, message: 'Failed to lload data' }

  const stops = await data1.json();
  const lastUpdated = await data2.json();
  return { success: true, stops, lastUpdated };
}

export async function fetchForce() {
  const response = await fetch(`https://data.police.uk/api/forces/${force}`);
  const data = await response.json();
  return data;
}

export async function createStolenReportAction(data: z.infer<typeof stolenReportSchema>) {
  try {

    const validated = stolenReportSchema.parse(data)

    await db.stolenReport.create({
      data: {
        name: validated.name,
        email: validated.email,
        contactNumber: validated.contactNumber,
        item: validated.item,
        itemDescription: validated.itemDescription,
        registration: validated.registration,
        image: validated.image,
        featured: false,
        published: false,
        found: false
      }
    })
    return { success: true, message: 'Report pending' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to send report' }
  }
}

