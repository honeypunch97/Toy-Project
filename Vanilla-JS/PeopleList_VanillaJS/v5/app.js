'use strict';
import { tempData } from './module/tempData.js';
import { get, getAll } from './module/getEle.js';
import List from './module/list.js';

// localStorage.clear();

const listContainer = get('.list-container');

const list = new List(listContainer);
list.init(tempData);
