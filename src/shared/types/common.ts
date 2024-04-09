import { StaticImageData } from 'next/image'

export type Manager = {
  image: string | StaticImageData,
  name: string,
  phoneNumber: string,
  admissionDay?: string,
  jobTitle: string,
  email: string,
  permission?: string,
  staj?: string
}