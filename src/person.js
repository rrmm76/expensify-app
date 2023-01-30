export const isAdult = (age) =>age > 18;
export const canDrink = (age) =>age >= 18;
const isSenior =(age) => age >=65;

//export {isAdult , canDrink };
export default isSenior ;

//export {isAdult , canDrink , isSenior as default} // not working good;

//export default (age) => age >=65;

//export default (age) => age >=65;