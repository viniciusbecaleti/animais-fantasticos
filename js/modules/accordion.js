export default class Accordion {
   constructor(list) {
      this.list = document.querySelectorAll(list)
      this.activeClass = "ativo"
   }

   toggleAccordion(item) {
      item.classList.toggle(this.activeClass)
      item.nextElementSibling.classList.toggle(this.activeClass)
   }

   addAccordionEvent() {
      this.list.forEach((item) => {
         item.addEventListener("click", () => this.toggleAccordion(item))
      })
   }

   init() {
      if (this.list.length) {
         this.toggleAccordion(this.list[0])
         this.addAccordionEvent()
      }
   }
}
