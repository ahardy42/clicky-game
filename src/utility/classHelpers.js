export const classHelpers = {
    addAnimation(className, array) {
        // add the animation class to the clicky className array
        let updatedClassName = className;
        array.forEach(element => {
            updatedClassName.push(element);
        });
        return updatedClassName;
    },
    removeAnimation(className, array) {
        // remove the animation from the className array
        let updatedClassName = className.filter(element => {
            return !array.includes(element);
        })
        return updatedClassName;
    }
}
