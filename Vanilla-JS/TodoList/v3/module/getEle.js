const get = target => {
   if (document.querySelector(target)) {
      return document.querySelector(target);
   } else {
      throw 'ERROR - get';
   }
};
const getAll = target => {
   if (documentAll.querySelector(target)) {
      return documentAll.querySelector(target);
   } else {
      throw 'ERROR - getAll';
   }
};

export { get, getAll };
