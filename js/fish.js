AFRAME.registerComponent("fish",{
    init:function(){
        for(var i =1; i<=15; i++){
            var id=`hurdle${i}`

            var posX= Math.floor(Math.random() *1500+ (-900))
            var posY= Math.floor(Math.random() *22 +(22))
            var posZ= Math.floor(Math.random() * 1000 +(-900))

            var position= {x: posX, y: posY, z: posZ}

            this.fish(id, position)
        }

    },
    fish: (id ,position)=>{
        var terrainEl=document.querySelector("#terrain")
        var fishEl=document.createElement("a-entity")

        fishEl.setAttribute("gltf-model","./assets/fish/scene.gltf")
        fishEl.setAttribute("id",id)
        fishEl.setAttribute("position",position)
        fishEl.setAttribute("scale",{x:1,y:1,z:1})
        fishEl.setAttribute("animation-mixer", {})
        
        terrainEl.appendChild(fishEl)
    }
})