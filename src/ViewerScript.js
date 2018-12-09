const controller = ({setProps}) => {
    return {
        pageReady() {
            setProps({
                name: "gil"
            });
        }
    }
};

function createControllers(controllerConfigs) {
    console.log({controllerConfigs});
    return [controller(controllerConfigs[0])];
}

module.exports = {
    createControllers
};
