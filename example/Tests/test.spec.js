

describe("Fer share Test suite", () => {

  it("Calculate fuel consume", async () => {

   const totalKm = await $(`//*[@resource-id="com.FerShare.fershare:id/editTextTotalkm"]`);
   await totalKm.setValue("10");

   const averageCons = await $(
     `//*[@resource-id="com.FerShare.fershare:id/editTextFuelConsume"]`
   );
   await averageCons.setValue("2");

   console.log(averageCons)
  });
});
