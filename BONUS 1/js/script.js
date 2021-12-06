Vue.config.devtools = true;
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const app = new Vue(
    {
        el: '#root',
        data: {
            currentItems:0,
            items:[
                {
                    image:'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image:'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum'
                },
                {
                    image:'img/03.jpg',
                    title:'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image:'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    image:'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
            ]
        },
        methods: {
            arrowDownOnClick: function(){
                if (this.items.length -1 > this.currentItems){
                    this.currentItems ++;
                }
                else{
                    this.currentItems = 0;
                }
            },
            arrowUpOnClick: function(){
                if ( this.currentItems === 0 ){
                    this.currentItems = this.items.length -1
                }
                else{
                    this.currentItems --;
                }
            },
            // BONUS 1 
            clickTumbs: function(test){
                this.currentItems = test
            }
        },
        // BONUS 2 
        // metto tuttta la funzione prima che si crei html  e quindi metto tutto su created
        // prima che si carichi HTML faccio partire la funzione che incrementa di 1 currentItems ogni 3000 millesimi di secondo.
        created: function (){

            setInterval(() => {
                if (this.items.length -1 > this.currentItems){
                    this.currentItems ++;
                }
                else if(this.currentItems === this.items.length -1){
                    this.currentItems = 0;
                }
            }, 300);

        }
    }
)
