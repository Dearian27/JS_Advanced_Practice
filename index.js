const root = document.getElementById('root')
 
class Component {
   constructor(selector)
   {
      this.$el = document.querySelector(selector)
   }
   hide(){
      this.$el.style.display = 'none'
   }
   show(){
      this.$el.style.display = 'block'
   }
}

class Box extends Component {
   constructor(options)
   {
      super(options.selector)
      this.$el.style.width = this.$el.style.height = options.size + 'px'; 
      this.$el.style.backgroundColor = options.color;
   }
}

const box1 = new Box({selector:'#root', size: 100, color:'grey'})