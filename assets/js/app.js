var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var toggleMobile = document.querySelector('.toggle-mobile'), headerMobile = document.querySelector('.header__mobile'), closeButton = document.querySelector('.mobile__close'), galleryContainer = document.querySelector('.gallery__container');
var submenuSAF = document.querySelector('.saf2023_anchor');
var submenuContainer = document.querySelector('.header__saf_menu');
var contactBtn = document.querySelector('.hero__left_contact');
toggleMobile === null || toggleMobile === void 0 ? void 0 : toggleMobile.addEventListener('click', function () {
    headerMobile === null || headerMobile === void 0 ? void 0 : headerMobile.classList.toggle('d-none');
});
closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener('click', function () {
    headerMobile === null || headerMobile === void 0 ? void 0 : headerMobile.classList.toggle('d-none');
});
function fetchPhotoData() {
    return __awaiter(this, void 0, void 0, function () {
        var fetchAddress, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('./assets/js/database.json')];
                case 1:
                    fetchAddress = _a.sent();
                    return [4 /*yield*/, fetchAddress.json()];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function loadPhotoGallery() {
    return __awaiter(this, void 0, void 0, function () {
        var fetchedData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchPhotoData()];
                case 1:
                    fetchedData = _a.sent();
                    fetchedData.forEach(function (datas) {
                        var HTMLCode = "\n        <div class=\"gallery__box\" id=\"".concat(datas.id, "\">\n                            <span class=\"gallery__name\">\n                                ").concat(datas.name, "\n                            </span>\n\n                            <div class=\"gallery__image\">\n                                <img src=\"").concat(datas.photourl, "\" alt=\"\">\n                            </div>\n                        </div>");
                        galleryContainer === null || galleryContainer === void 0 ? void 0 : galleryContainer.insertAdjacentHTML('beforeend', HTMLCode);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
loadPhotoGallery();
submenuSAF === null || submenuSAF === void 0 ? void 0 : submenuSAF.addEventListener('click', function () {
    if (submenuContainer) {
        if (submenuContainer.style.display === 'block' && submenuContainer.style.animationName !== 'opacityAnimReverse') {
            submenuContainer.style.animationName = 'opacityAnimReverse';
            setTimeout(function () {
                if (submenuContainer) { // Güvenlik kontrolü
                    submenuContainer.style.display = 'none';
                }
            }, 400);
        }
        else {
            submenuContainer.style.display = 'block';
            submenuContainer.style.animationName = 'opacityAnim';
        }
    }
});
contactBtn === null || contactBtn === void 0 ? void 0 : contactBtn.addEventListener('click', function () {
    setTimeout(function () {
        document.location.href = './contact_us.html';
    }, 300);
});
