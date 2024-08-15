document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('img[data-tooltip]')
  
  images.forEach(img => {
    img.addEventListener('mouseenter', (event) => {
      const tooltip = document.createElement('div')
      tooltip.className = 'tooltip'
      tooltip.innerText = event.target.getAttribute('data-tooltip')
      document.body.appendChild(tooltip)
      
      const rect = event.target.getBoundingClientRect()
      tooltip.style.left = `${rect.left}px`
      tooltip.style.top = `${rect.top + 400}px`
    });
    
    img.addEventListener('mouseleave', () => {
      const tooltip = document.querySelector('.tooltip')
      if (tooltip) {
        tooltip.remove()
      }
    })
  })
})

function press1(){
  res.style.color = 'black'
}

function press2(self){
  if(self.id === 'pic_big'){
    self.style.width = "940px"
    self.style.height = "448px"
  }
  console.log(self)
  if(self.src.includes('carrot')){
    self.src = "./images/img_vegetables_pepper.png"
  }
  else if(self.src.includes('pumpkin')){
    self.src = "./images/img_vegetables_corn.png"
  }
  else if(self.src.includes('pepper')){
    self.src = "./images/img_main_pumpkin.png"
  }
  else if(self.src.includes('corn')){
    self.src = "./images/img_vegetables_carrot.png"
  }
}

function press_test(self){
  console.log(self)
  self.style.color = 'black' 
}