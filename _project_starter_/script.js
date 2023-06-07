const panels = document.querySelectorAll(".panel")

panels.forEach(individualPanel => {
   
    individualPanel.addEventListener("click" , () => {
        removeActiveClass()
        individualPanel.classList.add("active")
        
    } )

} )


function removeActiveClass() {

    panels.forEach(individualPanel => {

        individualPanel.classList.remove("active")

    })
}