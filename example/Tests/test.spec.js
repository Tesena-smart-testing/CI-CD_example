

describe("Fer share Test suite", () => {

  it("Calculate fuel consume", async () => {
    let total = 308;
    let individiual = 102.67;

   const totalKm = await $(`//*[@resource-id="com.FerShare.fershare:id/editTextTotalkm"]`);
   await totalKm.setValue("10");

   const averageCons = await $(
     `//*[@resource-id="com.FerShare.fershare:id/editTextFuelConsume"]`
   );
   await averageCons.setValue("2");

   const pricePerLtr = await $(
     `//*[@resource-id="com.FerShare.fershare:id/editTextPricePerLiter"]`
   );
   await pricePerLtr.setValue("40");

   const personCount = await $(
     `//*[@resource-id="com.FerShare.fershare:id/editTextNumPerson"]`
   );
   await personCount.setValue("3");

   const additionalCosts = await $(
     `//*[@resource-id="com.FerShare.fershare:id/editOtherCosts"]`
   );
   await additionalCosts.setValue("300");

   const calculateButton = await $(
    `//*[@resource-id="com.FerShare.fershare:id/btnCalculate"]`
   );
   await calculateButton.click();

   const totalCheck = await $(
     `//*[@resource-id="com.FerShare.fershare:id/resultPriceValue"]`
   );
   await totalCheck.verifyValue(total);
  });

  

});
