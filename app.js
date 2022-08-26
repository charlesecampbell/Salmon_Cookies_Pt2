'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, minCustomer, maxCustomer, avgCookies) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.cookiesPerHour = [];
    this.grandTotal = 0;
    allStores.push(this);
}

Store.prototype.generateCookiesPerHour = function () {
    let result = generateBetween(this.minCustomer, this.maxCustomer);
    let totalCookiesOneHour = (result * this.avgSale);
    let roundedCookie = Math.round(totalCookiesOneHour);
    this.cookiesPerHour.push(roundedCookie);
    this.grandTotal += roundedCookie;
    console.log(this.grandTotal);
    console.log(this.cookiesPerHour);
}

Store.prototype.displaySales = function () {
    this.generateCookiesPerHour();
    let section = document.getElementById('cookiesPerHour');
    let th = document.createElement('th');
    let row = document.createElement('tr');
    th.textContent = this.name;
    row.appendChild(th);
    section.appendChild(row);
    for (let i = 0; i < this.totalCookiesEachHour.length; i++) {
    let cell = document.createElement('td');
    row.appendChild(cell);
    cell.textContent = `${this.totalCookiesEachHour[i]}`;
    }
    let totalCell = document.createElement('td');
        row.appendChild(totalCell);
        totalCell.textContent = `${this.grandTotal}`;
    };
    function generateBetween(low, high) {
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }

function generateFooter() {
   let section = document.getElementById('grandTotal');

    //defune our row element
    let tow = document.createElement('tr');
    let head = document.createElement('th');
    head.textContent.Content = 'Total Sales';
    row.appendChild(head);
    section.appendChild(row);

    //outer loop through hours
    for (let hour in hour) {
        let salesAtHour = 0;
        //innerloop through stores
        for (let store in allstores) {
            let currentStore = allStores[store];
            let currentSales = currentStore.totalCookiesEachHour[hour];
            salesAtHour += currentSales;
        }
        cell.textContent = salesAtHour;
        row.appendChild(cell);
        console.log(`Sales at ${hours[hour]}`);
    }
    //Add the gandTotals
    let cell = document.createElement('td');
    let total = 0;
    for (let store of allStores) {
        totals += store.grandTotal;
    }
    cell.textContent = totals;
    row.appendChild(cell);
}

let allStores = [];

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24,1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);
console.log(allStores);

//allStores[0].salesEachHour();
allStores[0].displaySales();
allStores[1].displaySales();
allStores[2].displaySales();
allStores[3].displaySales();
allStores[4].displaySales();
console.log(allStore);
console.log(Store);

//functionCityData(date) {

let seattle = {
    name: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    cookiesPerHour: [],


    //Calculate Random Customer
    randomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; //The maximum and minimum customers function
    },

        //Cookies Sold Per Hour
    calculateCookiesPerHour:function (){
        for (let i = 0; i < hours.length; i++){
            let hourlyCookies = Math.ceil(this.randomCustomer() * this.avgCookies);
            this.cookiesPerHour.push(hourlyCookies)
        }

    },
    //Render Store

    render:function() {
        this.calculateCookiesPerHour();
        console.log('inside render')
        let seattleStand = document.getElementById('SeattleStand');
        for (let i = 0; i < hours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`
            seattleStand.appendChild(li)
        }
    },
};
seattle.render();
console.log(seattle);

let tokyo = {
    name: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    cookiesPerHour: [],

    //Calculate Random Customer
    randomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; //The maximum and minimum customers function
    },

        //Cookies Sold Per Hour
    calculateCookiesPerHour:function (){
        for (let i = 0; i < hours.length; i++){
            let hourlyCookies = Math.ceil(this.randomCustomer() * this.avgCookies);
            this.cookiesPerHour.push(hourlyCookies)
        }

    },
    //Render Store

    render:function() {
        this.calculateCookiesPerHour();
        console.log('inside render')
        let TokyoStand = document.getElementById('TokyoStand');
        for (let i = 0; i < hours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`
            TokyoStand.appendChild(li)
        }
    },
};
tokyo.render();
console.log(tokyo);

//Dubai
let dubai = {
    name: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookies: 3.7,
    cookiesPerHour: [],

    //Calculate Random Customer
    randomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; //The maximum and minimum customers function
    },

        //Cookies Sold Per Hour
    calculateCookiesPerHour:function (){
        for (let i = 0; i < hours.length; i++){
            let hourlyCookies = Math.ceil(this.randomCustomer() * this.avgCookies);
            this.cookiesPerHour.push(hourlyCookies)
        }

    },
    //Render Store

    render:function() {
        this.calculateCookiesPerHour();
        console.log('inside render')
        let dubaiStand = document.getElementById('Dubai');
        for (let i = 0; i < hours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`
            DubaiStand.appendChild(li)
        }
    },
};
dubai.render();

//Paris
let paris = {
    name: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,
    cookiesPerHour: [],

    //Calculate Random Customer
    randomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; //The maximum and minimum customers function
    },

        //Cookies Sold Per Hour
    calculateCookiesPerHour:function (){
        for (let i = 0; i < hours.length; i++){
            let hourlyCookies = Math.ceil(this.randomCustomer() * this.avgCookies);
            this.cookiesPerHour.push(hourlyCookies)
        }

    },
    //Render Store

    render:function() {
        this.calculateCookiesPerHour();
        console.log('inside render')
        let parisStand = document.getElementById('Paris');
        for (let i = 0; i < hours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`
            ParisStand.appendChild(li)
        }
    },
};
paris.render();

//Lima
let lima = {
    name: 'Paris',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,
    cookiesPerHour: [],

    //Calculate Random Customer
    randomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; //The maximum and minimum customers function
    },

        //Cookies Sold Per Hour
    calculateCookiesPerHour:function (){
        for (let i = 0; i < hours.length; i++){
            let hourlyCookies = Math.ceil(this.randomCustomer() * this.avgCookies);
            this.cookiesPerHour.push(hourlyCookies)
        }

    },
    //Render Store

    render:function() {
        this.calculateCookiesPerHour();
        console.log('inside render')
        let limaStand = document.getElementById('Lima');
        for (let i = 0; i < hours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`
            LimaStand.appendChild(li)
        }
    },
};
lima.render();