export const classHelpers = {
    addAnimation(className, addedClass) {
        // add the animation class to the clicky className array
        let updatedClassName = className;
        updatedClassName.push(addedClass);
        return updatedClassName;
    },
    removeAnimation(className, array) {
        // remove the animation from the className array
        let updatedClassName = className;
        let len = array.length;
        for (let i = 0; i < len; i++) {
            updatedClassName.pop();
        }
        return updatedClassName;
    }
}