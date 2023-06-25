;( () => {
    const get  = target =>  document.querySelector(target); 
    const getAll  = target => document.querySelectorAll(target); 

    // 기본경로
    const $mainbook = get('.main-book'); 
    const $title = get('#title'); 
    const $author = get('#author'); 
    const $bookcode = get('#bookcode'); 
    const $tbody = get('.book-tbody'); 
    const $form = get('form'); 

    //클래스 
    class Book {
        constructor( title, author , bookcode ){
            this.title = title 
            this.author = author 
            this.bookcode = bookcode 
        }
    }


    class BookUI {
        //추가
        add( item ){
            if( !item.title || !item.author || !item.bookcode ) return 

            const tr = document.createElement('tr');
            tr.innerHTML = `
                    <td>${item.title}</td>
                    <td>${item.author}</td>
                    <td>${item.bookcode} </td>
                    <td><button class="delete">X</button></td>
            `;
            $tbody.append( tr );
            this.reset()            
        }
        //삭제
        del( target ){          
            if (target.classList.contains('delete')) {                
                target.parentElement.parentElement.remove();
                this.showMessage('북리스트에 정상삭제완료' , 'on') 
            }
        }
        
        //메세지
        showMessage( msg , calssName ) {
            const div = document.createElement('div')
            div.textContent  = msg 
            div.className = `show ${calssName}` 
            $mainbook.append(div)

            //2초후 삭제 
            setTimeout( () => {
                document.querySelector('.show').remove();
            }, 1000 )
        }


        //텍스트지우기
        reset(){
            $title.value = ''
            $author.value = ''
            $bookcode.value = ''
            $title.focus()
        }
    }
    
    $form.addEventListener('submit',e => {
        e.preventDefault();
        
        const title = $title.value 
        const author = $author.value 
        const bookcode = $bookcode.value 

        const book  = new Book( title , author , bookcode )
        const bookUI = new BookUI()

        if( !title || !author || !bookcode ) {
            bookUI.showMessage('값을 넣으세요' , 'off')
        }else {
            bookUI.add( book )
            bookUI.reset()      
            bookUI.showMessage('북리스트에 추가완료' , 'on')      
        }
    })

    $tbody.addEventListener('click', e => {
        const bookUI = new BookUI()
        bookUI.del( e.target )
        // bookUI.showMessage('북리스트에 정상삭제완료' , 'on') 
    })

})();