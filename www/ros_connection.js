var ros = new ROSLIB.Ros(
    {
        url : "ws://localhost:9090"
    }
);

var tfClient = new ROSLIB.TFClient(
    {
        ros : ros,
        fixedFrame : 'world',
        angularThres : 0.01,
        transThres : 0.01
    }
);

tfClient.subscribe('turtle1', function(tf){
    console.log(tf);
});

ros.on('connection', function(){
    console.log("ROS Master connected");
});

ros.on('error', function(error){
    console.log("ROS Server connected error:" , error);
});

ros.on('close', function(){
    console.log("Closed ros server");
});
