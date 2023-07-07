'use strict';
(function () {
   let data = [
      {
         id: 0,
         category: 'top',
         brand: '모이프',
         productName: '[SS23]WIDE DRAWSTRING BLOUSON / PAJAMA STRIPE',
         price: 238000,
         remainingCount: 10,
         filePath: 'images/top/',
         fileName: 'top_00',
         fileExtension: '.jpg',
      },
      {
         id: 1,
         category: 'top',
         brand: '토마스모어',
         productName: 'TD5-SH07 페이퍼셔츠 (9 Color)',
         price: 59700,
         remainingCount: 12,
         filePath: 'images/top/',
         fileName: 'top_01',
         fileExtension: '.jpg',
      },
      {
         id: 2,
         category: 'top',
         brand: '르아브',
         productName: '[단독]_라이크리넨 셔츠 (15COLOR)',
         price: 69700,
         remainingCount: 13,
         filePath: 'images/top/',
         fileName: 'top_02',
         fileExtension: '.jpg',
      },
      {
         id: 3,
         category: 'top',
         brand: '어나더오피스',
         productName: '23SS Writer Shirt (Almond Milk)',
         price: 96000,
         remainingCount: 9,
         filePath: 'images/top/',
         fileName: 'top_03',
         fileExtension: '.jpg',
      },
      {
         id: 4,
         category: 'top',
         brand: '포터리',
         productName: 'Comfort Shirt (Sax)',
         price: 189000,
         remainingCount: 12,
         filePath: 'images/top/',
         fileName: 'top_04',
         fileExtension: '.jpg',
      },
      {
         id: 5,
         category: 'top',
         brand: '포터리',
         productName: 'Button Down Shirt_Sax',
         price: 189000,
         remainingCount: 9,
         filePath: 'images/top/',
         fileName: 'top_05',
         fileExtension: '.jpg',
      },
      {
         id: 6,
         category: 'top',
         brand: '유스',
         productName: 'H/S Logo T-shirt (M) Black',
         price: 63000,
         remainingCount: 7,
         filePath: 'images/top/',
         fileName: 'top_06',
         fileExtension: '.jpg',
      },
      {
         id: 7,
         category: 'top',
         brand: '탄즈탄즈탄즈',
         productName: 'TZA2103-KH',
         price: 170000,
         remainingCount: 6,
         filePath: 'images/top/',
         fileName: 'top_07',
         fileExtension: '.jpg',
      },
      {
         id: 8,
         category: 'top',
         brand: '포터리',
         productName: 'Short Sleeve Comfort Shirt_12 Color',
         price: 159000,
         remainingCount: 11,
         filePath: 'images/top/',
         fileName: 'top_08',
         fileExtension: '.jpg',
      },
      {
         id: 9,
         category: 'top',
         brand: '네이더스',
         productName: 'ENGINEER L/S SHIRT (GREY)',
         price: 158000,
         remainingCount: 3,
         filePath: 'images/top/',
         fileName: 'top_09',
         fileExtension: '.jpg',
      },
      {
         id: 10,
         category: 'bottoms',
         brand: '어나더오피스',
         productName: '23SS M51 Field Pants (Olive Drab)',
         price: 168000,
         remainingCount: 12,
         filePath: 'images/bottoms/',
         fileName: 'bottoms_00',
         fileExtension: '.jpg',
      },
      {
         id: 11,
         category: 'bottoms',
         brand: '어나더오피스',
         productName: '23SS Santiago Slacks Standard (Black)',
         price: 156000,
         remainingCount: 11,
         filePath: 'images/bottoms/',
         fileName: 'bottoms_01',
         fileExtension: '.jpg',
      },
      {
         id: 12,
         category: 'bottoms',
         brand: '슬릭앤이지',
         productName: 'Officer Chino Pants 오피서 치노 팬츠',
         price: 143650,
         remainingCount: 8,
         filePath: 'images/bottoms/',
         fileName: 'bottoms_02',
         fileExtension: '.png',
      },
      {
         id: 13,
         category: 'bottoms',
         brand: '슬릭앤이지',
         productName: 'Andy Pants Selvedge Blue 앤디 팬츠 셀비지 블루',
         price: 246050,
         remainingCount: 6,
         filePath: 'images/bottoms/',
         fileName: 'bottoms_03',
         fileExtension: '.png',
      },
      {
         id: 14,
         category: 'bottoms',
         brand: '이얼즈어고',
         productName: 'OVERLAP TWO TUCK WIDE PANTS - COTTON LIGHT GREY',
         price: 228000,
         remainingCount: 7,
         filePath: 'images/bottoms/',
         fileName: 'bottoms_04',
         fileExtension: '.jpg',
      },
      {
         id: 15,
         category: 'bottoms',
         brand: '유스',
         productName: 'Structured Wide Denim Pants Light Blue',
         price: 208000,
         remainingCount: 11,
         filePath: 'images/bottoms/',
         fileName: 'bottoms_05',
         fileExtension: '.jpg',
      },
      {
         id: 16,
         category: 'bottoms',
         brand: '티엔알',
         productName: '[TNR] Black washed denim',
         price: 169000,
         remainingCount: 5,
         filePath: 'images/bottoms/',
         fileName: 'bottoms_06',
         fileExtension: '.jpg',
      },
      {
         id: 17,
         category: 'bottoms',
         brand: '스테디 에브리웨어',
         productName: 'Relaxed Denim Pants (Light Blue)',
         price: 159000,
         remainingCount: 7,
         filePath: 'images/bottoms/',
         fileName: 'bottoms_07',
         fileExtension: '.jpg',
      },
      {
         id: 18,
         category: 'bottoms',
         brand: '고요웨어',
         productName: 'ADVANCE VENTIL PANTS (BLACK)',
         price: 158000,
         remainingCount: 8,
         filePath: 'images/bottoms/',
         fileName: 'bottoms_08',
         fileExtension: '.jpg',
      },
      {
         id: 19,
         category: 'bottoms',
         brand: '어나더오피스',
         productName: '23SS Santiago Slacks Standard (Graphite)',
         price: 156000,
         remainingCount: 13,
         filePath: 'images/bottoms/',
         fileName: 'bottoms_09',
         fileExtension: '.jpg',
      },
      {
         id: 20,
         category: 'outerwear',
         brand: '바라쿠타',
         productName: '바라쿠타 G9 헤링턴 자켓 - 블랙 (BRCPS0001BCNY1 100)',
         price: 272000,
         remainingCount: 4,
         filePath: 'images/outerwear/',
         fileName: 'outerwear_00',
         fileExtension: '.jpg',
      },
      {
         id: 21,
         category: 'outerwear',
         brand: '어나더오피스',
         productName: '23SS Santiago Blazer (Graphite)',
         price: 278000,
         remainingCount: 6,
         filePath: 'images/outerwear/',
         fileName: 'outerwear_01',
         fileExtension: '.jpg',
      },
      {
         id: 22,
         category: 'outerwear',
         brand: '부기홀리데이',
         productName: '[5월12일 순차발송]_09 CHAMBRAY WORK SHIRT (blue)',
         price: 112100,
         remainingCount: 4,
         filePath: 'images/outerwear/',
         fileName: 'outerwear_02',
         fileExtension: '.jpg',
      },
      {
         id: 23,
         category: 'outerwear',
         brand: '모이프',
         productName: '[SS23]UNIFORM JACKET / BLACK NC',
         price: 297000,
         remainingCount: 9,
         filePath: 'images/outerwear/',
         fileName: 'outerwear_03',
         fileExtension: '.jpg',
      },
      {
         id: 24,
         category: 'outerwear',
         brand: '어나더오피스',
         productName: '23SS Santiago Blazer (Heather Gray)',
         price: 278000,
         remainingCount: 7,
         filePath: 'images/outerwear/',
         fileName: 'outerwear_04',
         fileExtension: '.jpg',
      },
      {
         id: 25,
         category: 'outerwear',
         brand: '벨리에',
         productName: '다이에그널 블루종 자켓 - 레이븐 블랙',
         price: 239000,
         remainingCount: 5,
         filePath: 'images/outerwear/',
         fileName: 'outerwear_05',
         fileExtension: '.jpg',
      },
      {
         id: 26,
         category: 'outerwear',
         brand: '모이프',
         productName: '[SS23]ALL-TERRAIN PARKA / ECRU NC',
         price: 367000,
         remainingCount: 4,
         filePath: 'images/outerwear/',
         fileName: 'outerwear_06',
         fileExtension: '.jpg',
      },
      {
         id: 27,
         category: 'outerwear',
         brand: '포터리',
         productName: 'Wool Sports Jacket_Dark Gray',
         price: 359000,
         remainingCount: 8,
         filePath: 'images/outerwear/',
         fileName: 'outerwear_07',
         fileExtension: '.jpg',
      },
      {
         id: 28,
         category: 'outerwear',
         brand: '토마스모어',
         productName: 'TD5-JP01 탱커 블루종-블랙',
         price: 107000,
         remainingCount: 10,
         filePath: 'images/outerwear/',
         fileName: 'outerwear_08',
         fileExtension: '.jpg',
      },
      {
         id: 29,
         category: 'outerwear',
         brand: '24/7 시리즈',
         productName: 'COMFORT SET-UP OVER JACKET MELANGE GRAY (247)',
         price: 132050,
         remainingCount: 11,
         filePath: 'images/outerwear/',
         fileName: 'outerwear_09',
         fileExtension: '.jpg',
      },
   ];
   /* 
 [형식] 아이디, 분류, 브랜드, 제품명, 가격, 남은수량, 파일경로, 파일명, 파일확장자
 [내용출처] 29cm, https://shop.29cm.co.kr/ (2023-04-28)
 */

   const get = target => document.querySelector(target);
   const getAll = target => document.querySelectorAll(target);

   const viewSelect = get('#viewSelect'),
      productBox = get('.product-box'),
      moreViewBtn = get('.more-view'),
      infoContainer = get('.info-container'),
      cartContainer = get('.cart-container'),
      keepShoppingBtn = infoContainer.querySelector('.keep-shopping'),
      gotoCartBtn = infoContainer.querySelector('.goto-cart'),
      goCartBtn = get('.item-shop .goCartBtn'),
      myCartNum = get('.item-shop .header button span'),
      closeCartContainerBtn = get('.cart-container .cart .closeBtn'),
      myCart = get('.cart-container .cart table tbody'),
      cartTotalPrice = get('.cart-container .cart table tfoot td'),
      selectAllProductChk = get('.cart-container .cart table #checkAll'),
      selectedProductOrderBtn = get('.cart-container .cart .btn-wrap .selected-product-order-btn'),
      selectAllBtn = get('.cart-container .cart .btn-wrap .select-all-btn'),
      orderBtn = get('.cart-container .cart .btn-wrap .order-btn'),
      deleteSelectedProductBtn = get('.cart-container .cart .btn-wrap .delete-selected-product-btn'),
      emptyingBtn = get('.cart-container .cart .btn-wrap .emptying-btn'),
      msgContainer = get('.msg-container'),
      msgContent = get('.msg-container .msg-box p'),
      msgContainerConfirmBtn = get('.msg-container .msg-box .confirm-btn');

   let tempData = data.concat();
   let myArr = [];

   let productCnt = 0;

   // 숫자 3자리마다 콤마 넣어주는 포맷
   const formatNum = num => {
      let result = num.toString();
      for (let i = result.length - 3; i > 0; i -= 3) {
         result = result.slice(0, i) + ',' + result.slice(i);
      }
      return result;
   };
   // select값에 따라 상품리스트 sort
   const sortProduct = () => {
      if (viewSelect.value === 'sort-name') {
         tempData.sort((a, b) => {
            let num = null;
            num = a.productName < b.productName ? -1 : 1;
            return num;
         });
      } else if (viewSelect.value === 'sort-num') {
         tempData.sort((a, b) => a.remainingCount - b.remainingCount);
      }
   };
   //  msg 내용 수정
   const settingMsg = command => {
      if (command === 'order') {
         msgContent.textContent = '주문이 완료되었습니다';
      } else if (command === 'cancel') {
         msgContent.textContent = '상품을 삭제했습니다';
      }
   };
   //  장바구니 옆 현재 담은 상품숫자 표시
   const printProductNumInCart = () => {
      let itemNumInCart = 0;
      myArr.forEach(item => {
         itemNumInCart += item.remainingCount;
      });
      myCartNum.textContent = itemNumInCart;
   };

   //  상품리스트 장바구니 버튼 클릭시, 알림창
   const showInfoContainer = e => {
      let isInCart = false,
         myArrIdx = 0;
      infoContainer.classList.add('on');
      tempData.forEach(item => {
         if (item.id === Number(e.target.closest('li').dataset.id)) {
            if (item.remainingCount === 0) {
               alert('남은 수량이 없습니다.');
               return 0;
            }
            myArr.forEach((myItem, idx) => {
               if (myItem.id === Number(e.target.closest('li').dataset.id)) {
                  isInCart = true;
                  myArrIdx = idx;
               }
            });
            if (isInCart) {
               myArr[myArrIdx].remainingCount += 1;
            } else {
               myArr.push({
                  id: item.id,
                  category: item.category,
                  brand: item.brand,
                  productName: item.productName,
                  price: item.price,
                  remainingCount: 1,
                  filePath: item.filePath,
                  fileName: item.fileName,
                  fileExtension: item.fileExtension,
               });
            }
            item.remainingCount -= 1;
         }
      });
      printProduct();
      // 장바구니 버튼 옆 현재 담은 아이템 개수 변경
      printProductNumInCart();
   };
   //  상품리스트 출력
   const printProduct = () => {
      sortProduct();
      // 내용 초기화
      productBox.innerHTML = '';

      for (let i = 0; i < productCnt + 10; i++) {
         if (i >= tempData.length) {
            break;
         }
         //  내용 생성 및 추가
         let tempLi = document.createElement('li'),
            tempImg = document.createElement('div'),
            tempProductBrand = document.createElement('em'),
            tempProductName = document.createElement('strong'),
            tempProductNum = document.createElement('b'),
            tempProductPrice = document.createElement('span'),
            tempBtn = document.createElement('button');
         tempLi.setAttribute('data-id', tempData[i].id);
         tempLi.setAttribute('data-category', tempData[i].category);
         tempLi.setAttribute('data-brand', tempData[i].brand);
         tempLi.setAttribute('data-productName', tempData[i].productName);
         tempLi.setAttribute('data-price', tempData[i].price);
         tempLi.setAttribute('data-remainingCount', tempData[i].remainingCount);
         if (tempData[i].remainingCount === 0) {
            tempLi.classList.add('sold-out');
         } else {
            tempLi.classList.remove('sold-out');
         }
         tempImg.classList.add('img');
         tempImg.style.backgroundImage = `url(${
            tempData[i].filePath + tempData[i].fileName + tempData[i].fileExtension
         })`;
         tempProductBrand.textContent = tempData[i].brand;
         tempProductName.textContent = tempData[i].productName;
         tempProductNum.textContent = `남은 수량 : ${tempData[i].remainingCount}`;
         tempProductPrice.textContent = `${formatNum(tempData[i].price)}원`;
         tempBtn.textContent = '장바구니';
         tempBtn.className = 'push-to-cart';
         tempBtn.addEventListener('click', showInfoContainer);
         tempLi.append(tempImg, tempProductBrand, tempProductName, tempProductNum, tempProductPrice, tempBtn);
         productBox.append(tempLi);
      }
   };
   //  장바구니 내용 출력
   const printProductInCart = () => {
      const controlChk = () => {
         let isAllChk = true;
         let chkS = getAll('.cart-container .cart tr td input[type="checkbox"]');
         chkS.forEach(item => {
            if (item.checked === false) {
               isAllChk = false;
            }
         });
         if (isAllChk === false) {
            selectAllProductChk.checked = false;
         } else {
            selectAllProductChk.checked = true;
         }
      };
      let totalPrice = 0;
      // 내용 초기화
      myCart.innerHTML = '';
      // 내용 생성 및 추가
      myArr.forEach(item => {
         let maxNum = 0;
         tempData.forEach(tempDataItem => {
            if (item.id === tempDataItem.id) {
               maxNum = item.remainingCount + tempDataItem.remainingCount;
            }
         });
         let tempTr = document.createElement('tr'),
            tempTd1 = document.createElement('td'),
            tempCheckbox = document.createElement('input'),
            tempImg = document.createElement('div'),
            tempTd2 = document.createElement('td'),
            tempBrand = document.createElement('em'),
            tempName = document.createElement('p'),
            tempTd3 = document.createElement('td'),
            tempNumber = document.createElement('input'),
            tempTd4 = document.createElement('td');
         tempTr.setAttribute('data-id', item.id);
         tempCheckbox.setAttribute('type', 'checkbox');
         tempCheckbox.setAttribute('checked', '');
         tempCheckbox.addEventListener('change', controlChk);
         tempImg.classList.add('img');
         tempImg.style.backgroundImage = `url(${item.filePath + item.fileName + item.fileExtension})`;
         tempBrand.textContent = item.brand;
         tempName.textContent = item.productName;
         tempNumber.setAttribute('type', 'number');
         tempNumber.setAttribute('min', '1');
         tempNumber.setAttribute('max', maxNum);
         tempNumber.value = item.remainingCount;
         //  input[type=number]의 값변경시, 상품배열, 장바구니배열 수량 수정
         tempNumber.addEventListener('change', e => {
            let old = 0,
               current = Number(e.currentTarget.value);
            myArr.forEach(item => {
               if (item.id === Number(e.currentTarget.closest('tr').dataset.id)) {
                  old = item.remainingCount;
                  item.remainingCount += current - old;
               }
            });
            tempData.forEach(item => {
               if (item.id === Number(e.currentTarget.closest('tr').dataset.id)) {
                  item.remainingCount -= current - old;
               }
            });
            printProduct();
            printProductNumInCart();
            printProductInCart();
         });
         tempTd1.append(tempCheckbox, tempImg);
         tempTd2.append(tempBrand, tempName);
         tempTd3.append(tempNumber);
         tempTd4.textContent = `${formatNum(item.price * item.remainingCount)}원`;
         tempTr.append(tempTd1, tempTd2, tempTd3, tempTd4);
         myCart.append(tempTr);
         totalPrice += item.price * item.remainingCount;
      });
      cartTotalPrice.textContent = `총금액 ${formatNum(totalPrice)}원`;
   };
   //  좌측 최상단 체크박스 체크시, 전체 상품 체크
   const selectAllProduct = () => {
      let chkS = getAll('.cart-container .cart tr td input[type="checkbox"]');
      if (selectAllProductChk.checked) {
         chkS.forEach(item => {
            item.checked = true;
         });
      } else {
         chkS.forEach(item => {
            item.checked = false;
         });
      }
   };

   //  장바구니 창 - 선택상품주문 기능
   const productOrder = () => {
      let chkS = getAll('.cart-container .cart tr td input[type="checkbox"]');
      chkS.forEach(item => {
         if (item.checked) {
            myArr.forEach((myItem, idx) => {
               if (myItem.id === Number(item.closest('tr').dataset.id)) {
                  myArr.splice(idx, 1);
               }
            });
         }
      });
      // 장바구니창 닫기
      cartContainer.classList.remove('on');
      // 알림창 띄우기
      settingMsg('order');
      msgContainer.classList.add('on');
      //  장바구니 아이템 수량 표시
      printProductNumInCart();
   };

   //  장바구니 창 - 선택상품삭제 기능
   const productOrderCancel = () => {
      let chkS = getAll('.cart-container .cart tr td input[type="checkbox"]');
      chkS.forEach(item => {
         if (item.checked) {
            myArr.forEach((myItem, idx) => {
               if (myItem.id === Number(item.closest('tr').dataset.id)) {
                  tempData.forEach(dataItem => {
                     if (dataItem.id === myItem.id) {
                        // 아이템 리스트에 개수 더해주기(상품 개수 되돌리기)
                        dataItem.remainingCount += myItem.remainingCount;
                     }
                  });
                  // myArr에서 해당 아이템 삭제
                  myArr.splice(idx, 1);
               }
            });
         }
      });
      printProduct();
      printProductNumInCart();
      printProductInCart();
      // 알림창 내용변경 및 띄우기
      settingMsg('cancel');
      msgContainer.classList.add('on');
   };

   ///////////////////////////////////////////////////
   printProduct();
   //  상품 더보기 기능(화면 수량 증가+10)
   moreViewBtn.addEventListener('click', () => {
      productCnt += 10;
      printProduct();
   });
   //  상품리스트 페이지 - 좌측 상단 정렬
   viewSelect.addEventListener('change', () => {
      sortProduct();
      printProduct();
   });
   keepShoppingBtn.addEventListener('click', () => {
      infoContainer.classList.remove('on');
   });
   gotoCartBtn.addEventListener('click', () => {
      infoContainer.classList.remove('on');
      printProductInCart();
      cartContainer.classList.add('on');
   });
   closeCartContainerBtn.addEventListener('click', () => {
      cartContainer.classList.remove('on');
   });
   goCartBtn.addEventListener('click', () => {
      printProductInCart();
      cartContainer.classList.add('on');
   });
   //  좌측 최상단 input[checkbox]값 selected시, 전체 selected
   selectAllProductChk.addEventListener('change', selectAllProduct);
   //  작업용 추후 삭제selectedProductOrderBtn,selectAllBtn,orderBtn,deleteSelectedProductBtn,emptyingBtn

   //  장바구니 창 - 선택상품주문 기능
   selectedProductOrderBtn.addEventListener('click', productOrder);
   //  장바구니 창 - 전체선택 기능
   selectAllBtn.addEventListener('click', () => {
      selectAllProductChk.checked = true;
      selectAllProduct();
   });
   //  장바구니 창 - 주문하기 기능
   orderBtn.addEventListener('click', () => {
      selectAllProductChk.checked = true;
      selectAllProduct();
      productOrder();
   });
   //  장바구니 창 - 선택상품삭제 기능
   deleteSelectedProductBtn.addEventListener('click', productOrderCancel);
   //  장바구니 창 - 비우기 기능(전체상품삭제 기능)
   emptyingBtn.addEventListener('click', () => {
      selectAllProductChk.checked = true;
      selectAllProduct();
      productOrderCancel();
   });
   // 알림창 확인시, 닫기
   msgContainerConfirmBtn.addEventListener('click', () => {
      msgContainer.classList.remove('on');
   });
})();
