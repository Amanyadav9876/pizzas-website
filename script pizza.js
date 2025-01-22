var a=gsap.timeline()
a.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:.5

})
a.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    delay:.5,
    stagger:0.3

})
a.from("h1",{
    y:-200,
    opacity:0,
    duration:1,
    delay:.5,
    stagger:0.3

})
a.to("img",{
    x:500,
    opacity:1,
    rotate:360,
    scale:1,
    duration:2
})
