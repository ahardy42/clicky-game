export const classHelpers = {
    correctAnswer(className) {
        // add the tada class to the clicky
        let updatedClassName = className.concat(" tada");
        return updatedClassName;
    },
    incorrectAnswer(className) {
        // add the shake class to the clicky
        let updatedClassName = className.concat(" shake");
        return updatedClassName;
    },
    removeAnimation(className, animation) {
        // remove the animation from the className string
        let updatedClassName = new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(className.split(" ").filter(el => el !== animation).join(" "));
            }, 2000);
        }) 
        return updatedClassName;
    }
}
