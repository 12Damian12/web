//const modal = document.getElementById("modal")
//const closebt = document.querySelector(".close")

//function openModal() {
    // modal.style.display = "block";
//}

//function closeModal () {
//    modal.style.display = "none"
//}

//window.onclick = function (event) {
//    if (event.target === modal || event.target === closeBtn)   {
//        closeModal();
//    }
//}

const cities =[
    {name:"Москва", description: "Москва - столица России", image:"img/Москва.jpg" },
    {name:"Питер", description: "Питер - город криминала", image:"img/Питер.jpg" },
    {name:"Казань", description: "Казань - Один из крупнейших экономических, научных, образовательных, религиозных, досуговых, культурных, финансовых и спортивных центров России ", image:"img/Казань.jpg" },
    {name:"Акватопия", description: "Аквотопия - город созданный на воде"  },
    {name:"Исландия", description: "Исландия - необычайная смесь живописных природных чудес: ледников и вулканов, водопадов и гейзеров, полуденного солнца и Северного сияния", image:"img/новая Исландия.jpеg" },
]

const markers = document.querySelectorAll('.marker')
const infoBox = document.getElementById('info-box')

const modal =document.getElementById('modal')
const modalTitle = document.getElementById('modal-title')
const modalDescription = document.getElementById('modal-description')
const modalImg = document.getElementById('modal-img')

markers.forEach(marker => {
    marker.addEventListener('mouseover', () => {
      const city = cities[marker.getAttribute('data-id')]
      infoBox.textContent = city.name
      infoBox.style.top = `${marker.offsetTop - 30}px`
      infoBox.style.left = `${marker.offsetLeft}px`
      infoBox.classList.add('visible')
    })
    marker.addEventListener('mouseout', () =>{
        infoBox.classList.remove("visible")
    })

    marker.addEventListener('click', () => {
        const city = cities[marker.getAttribute('data-id')]
        modalTitle.textContent = city.name
        modalDescription.textContent = city.description
        modalImg.src = city.image
        modal.style.display = 'flex'
    })
})