const MenuController = require("../controllers/MenuController");
// #1
 describe("MenuController", () => {

   beforeEach(() => {
     this.menu = new MenuController();
   });

   beforeEach(() => {
     this.menu = new MenuController();
   });

   describe('#remindMe()', () => {

     it("should return string when string is available", () => {
       expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit.");
     });
   });
 });
