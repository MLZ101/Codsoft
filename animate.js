const object = new IntersectionObserver( (e) =>{    // this object acts as an observer
    e.forEach((elem) =>{
        if(elem.isIntersecting){
            elem.target.classList.add('animate');   //target returns the element at which the event occured                    
        }//classlist: a read-only property that is used to return CSS classes in the form of an array

        else{
            elem.target.classList.remove('animate');
        }
    })
}
// , 2nd param is options where options is a class with a root ie query/ rootMargin/ and threshold ie percentage)
)

const hidden_left = document.querySelectorAll('.hidden_l');
hidden_left.forEach( (e)=>{
    object.observe(e);
});

const hidden_right = document.querySelectorAll('.hidden_r');
hidden_right.forEach( (e)=>{
    object.observe(e);
});

const hidden = document.querySelectorAll('.hidden');
hidden.forEach( (e)=>{
    object.observe(e);
});