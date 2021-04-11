// Global Variables
export const inflation = 0.021
export const rentPerWeek = 460
export const currentBankBalance = 160000
export const yearsInvested = 30
export const isFirstHomeBuyer = true
export const numberOfPeopleInDwelling = 2
export const isLivingFarAway = true

// Apartment Variables
export const numberOfTermsInMonths = yearsInvested * 12
export const apartmentPurchasePrice = 685000
export const apartmentAnnualCapitalGains = 0.0725
export const apartmentSellingPrice =
  apartmentPurchasePrice * (1 + apartmentAnnualCapitalGains) ** yearsInvested
export const apartmentDeposit = currentBankBalance
export const loanBalance = apartmentPurchasePrice - apartmentDeposit
export const mortgageRate = 0.068
export const monthlyInterestRate = mortgageRate / 12
export const monthlyRepayments =
  (loanBalance *
    (monthlyInterestRate *
      (1 + monthlyInterestRate) ** numberOfTermsInMonths)) /
  ((1 + monthlyInterestRate) ** numberOfTermsInMonths - 1)
export const totalPaidToBank = monthlyRepayments * numberOfTermsInMonths
export const totalInterestPaid = totalPaidToBank - loanBalance
export const isOwnerOccupier = true
export const apartmentRatesAnnual = 2264
export const apartmentRatesTotal = apartmentRatesAnnual * yearsInvested
export const apartmentBodyCorporateAnnualRate = 4500
export const apartmentBodyCorporateTotal =
  apartmentBodyCorporateAnnualRate * yearsInvested
export const apartmentRealEstateCommissionRate = 0.03
export const apartmentRealEstateCommission =
  apartmentRealEstateCommissionRate * apartmentSellingPrice
export const numberOfApartmentsConsidered = 3
export const apartmentBuildingReportFeePerUnit = 600
export const apartmentBuildingReportFee =
  numberOfApartmentsConsidered * apartmentBuildingReportFeePerUnit
export const apartmentLIMReportUnitFee = 350
export const apartmentLIMReportTotalFee =
  apartmentLIMReportUnitFee * numberOfApartmentsConsidered
export const apartmentLegalFees = 600
export const monthlyApartmentMaintenance = 61
export const apartmentTotalMaintenance =
  monthlyApartmentMaintenance * 12 * yearsInvested
export const propertyAgentRate = 0.085
export const apartmentPropertyAgentFees = isOwnerOccupier
  ? 0
  : propertyAgentRate * rentPerWeek * 4 * 12 * yearsInvested
export const apartmentAnnualInsuranceCost = 912
export const apartmentTotalInsuranceCost =
  apartmentAnnualInsuranceCost * yearsInvested
export const transportCostsTotal = isLivingFarAway
  ? 20 * numberOfPeopleInDwelling * 4 * 12 * yearsInvested
  : 0
export const totalRentalSavings = rentPerWeek * 4 * 12 * yearsInvested
export const apartmentOverallCost =
  apartmentPurchasePrice +
  totalInterestPaid +
  apartmentRatesTotal +
  apartmentBodyCorporateTotal +
  apartmentRealEstateCommission +
  apartmentBuildingReportFee +
  apartmentLIMReportTotalFee +
  apartmentLegalFees +
  apartmentTotalMaintenance +
  apartmentPropertyAgentFees +
  apartmentTotalInsuranceCost +
  transportCostsTotal

console.log('apartmentOverallCost', apartmentOverallCost)
