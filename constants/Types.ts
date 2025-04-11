export interface BmiResult {
  interval: [number, number]
  value_fr: string
  value_en: string
  comment: string
  img_men: string
  img_woman: string
  advice_fr: string
  advice_en: string
}

export interface BmiResponse {
  weight: string
  height: string
  gender: number
  bmi: number
  bmi_result: BmiResult
}

export interface ApiError {
  message: string
  status?: number
}
