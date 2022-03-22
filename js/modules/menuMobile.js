import outsideClick from "./outsideClick.js"

export default function initMenuMobile(element, events, callback) {
   const menuButton = document.querySelector('[data-menu="button"]')
   const menuList = document.querySelector('[data-menu="list"]')
   const eventos = ["click", "touchstart"]

   function openMenu(event) {
      menuList.classList.add("ativo")
      menuButton.classList.add("ativo")
      outsideClick(menuList, eventos, () => {
         menuList.classList.remove("ativo")
         menuButton.classList.remove("ativo")
      })
   }

   eventos.forEach(userEvent => {
      menuButton.addEventListener(userEvent, openMenu)
   })
}