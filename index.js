// Copyright (c) 2024 4TiZalewski

// @ts-check

/**
 * @type {HTMLInputElement | null}
 */
const calculate_button = document.querySelector("#calculate-button");

// BILON
/**
 * @type {HTMLInputElement | null}
 */
const bilon_number = document.querySelector("#bilon-ilosc");

/**
 * @type {HTMLInputElement | null}
 */
const bilon_value = document.querySelector("#bilon-przelicznik");

/**
 * @type {HTMLHeadingElement | null}
 */
const bilon_result = document.querySelector(".bilon-sum");

// BANKNOTY
/**
 * @type {HTMLInputElement | null}
 */
const banknoty_number = document.querySelector("#banknoty-ilosc");

/**
 * @type {HTMLInputElement | null}
 */
const banknoty_value = document.querySelector("#banknoty-przelicznik");

/**
 * @type {HTMLHeadingElement | null}
 */
const banknoty_result = document.querySelector(".banknoty-sum");

// OVERALL
/**
 * @type {HTMLHeadingElement | null}
 */
const overall_result = document.querySelector(".overall-sum");

/**
 * @type {string}
 */
const SUFFIX = " PLN";

if (bilon_result) {
    push_result(bilon_result, 0);
}

if (banknoty_result) {
    push_result(banknoty_result, 0);
}

if (overall_result) {
    push_result(overall_result, 0);
}

if (calculate_button) {
    calculate_button.addEventListener("click", (/** @type {MouseEvent} */ event) => {
        event.preventDefault();

        /**
         * @type {number}
         */
        let bilon_sum = 0;
        if (bilon_number && bilon_value) {
            if (bilon_result) {
                /**
                 * @type {number}
                 */
                const number_value = Number(bilon_number.value);
                /**
                 * @type {number}
                 */
                const value_value = Number(bilon_value.value);

                if (is_number_viable(number_value) && is_number_viable(value_value)) {
                    bilon_sum = process_number(number_value) * process_number(value_value);
                    push_result(bilon_result, bilon_sum);
                }
            } else {
                console.warn("Failed to get bilon result container!");
            }
        }

        /**
         * @type {number}
         */
        let banknoty_sum = 0;
        if (banknoty_number && banknoty_value) {
            if (banknoty_result) {
                /**
                 * @type {number}
                 */
                const number_value = Number(banknoty_number.value);
                /**
                 * @type {number}
                 */
                const value_value = Number(banknoty_value.value);

                if (is_number_viable(number_value) && is_number_viable(value_value)) {
                    banknoty_sum = process_number(number_value) * process_number(value_value);
                    push_result(banknoty_result, banknoty_sum);
                }
            } else {
                console.warn("Failed to get banknoty result container!");
            }
        }

        if (overall_result) {
            push_result(overall_result, banknoty_sum + bilon_sum);
        } else {
            console.warn("Failed to get overall result container!");
        }
    });
}

/**
 * @param {number} number 
 * @returns {boolean}
 */
function is_number_viable(number) {
    return !isNaN(number) && number >= 0;
}

/**
 * @param {number} number 
 * @returns {number}
 */
function process_number(number) {
    let number_value = Math.floor(Number(number) * 100) / 100;
    number_value = Number(number_value.toFixed(2));
    return number_value;
}

/**
 * @param {HTMLElement} element 
 * @param {number} value 
 */
function push_result(element, value) {
    element.innerText = value.toFixed(2) + SUFFIX;
}
