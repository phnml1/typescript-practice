var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    // public readonly first: string;
    // public readonly last: string;
    // private score: number;
    // 파라미터 단축구문
    function Player(first, last, 
    // protected는 정의된 클래스 혹은 자식 클래스에서 접근
    _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        // this.first:string = first; this.last:string = last
    }
    Player.prototype.secretMethod = function () {
        console.log("SECRET METHOD!");
    };
    Object.defineProperty(Player.prototype, "fullName", {
        get: function () {
            return "".concat(this.first, " ").concat(this.last);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (newScore) {
            if (newScore < 0) {
                throw new Error("Score cannot be negative!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var SuperPlayer = /** @class */ (function (_super) {
    __extends(SuperPlayer, _super);
    function SuperPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdmin = true;
        return _this;
    }
    SuperPlayer.prototype.maxScore = function () {
        this._score = 9999999;
    };
    return SuperPlayer;
}(Player));
var elton = new Player("Elton", "steele", 100);
elton.fullName;
elton.score = 23; //'23'x
var Bike = /** @class */ (function () {
    function Bike(color) {
        this.color = color;
    }
    return Bike;
}());
var Jacket = /** @class */ (function () {
    function Jacket(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    Jacket.prototype.print = function () {
        console.log("".concat(this.color, " ").concat(this.brand, " Jacket"));
    };
    return Jacket;
}());
var bike1 = new Bike("red");
var Jacket1 = new Jacket("Prada", "black");
// abstract 인스턴스 생성 불가능
/*Employee
-FullTimeEmployee
-PartTimeEmployee
*/
var Employee = /** @class */ (function () {
    function Employee(first, last) {
        this.first = first;
        this.last = last;
    }
    Employee.prototype.greet = function () {
        console.log("Hello!");
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(first, last, salary) {
        var _this = _super.call(this, first, last) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getPay = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(first, last, hourlyRate, hoursWorked) {
        var _this = _super.call(this, first, last) || this;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    PartTimeEmployee.prototype.getPay = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return PartTimeEmployee;
}(Employee));
var betty = new FullTimeEmployee('Betty', 'White', 95000);
console.log(betty.getPay());
var bill = new PartTimeEmployee('Bill', 'Billerson', 24, 11000);
console.log(bill.getPay());
