var progressBarId = displayProgress();
function displayProgress() {
    function displayProgress1 () {
        document.getElementById("progressBar").innerHTML = "10 Seconds Left!"; 
        function displayProgress2 () {
            document.getElementById("progressBar").innerHTML = "9 Seconds Left!";
            function displayProgress3 () {
                document.getElementById("progressBar").innerHTML = "8 Seconds Left!";
                function displayProgress4 () {
                    document.getElementById("progressBar").innerHTML = "7 Seconds Left!";
                    function displayProgress5 () {
                        document.getElementById("progressBar").innerHTML = "6 Seconds Left!";
                        function displayProgress6 () {
                            document.getElementById("progressBar").innerHTML = "5 Seconds Left!";
                            function displayProgress7 () {
                                document.getElementById("progressBar").innerHTML = "4 Seconds Left!";
                                function displayProgress8 () {
                                    document.getElementById("progressBar").innerHTML = "3 Seconds Left!";
                                    function displayProgress9 () {
                                        document.getElementById("progressBar").innerHTML = "2 Seconds Left!";
                                        function displayProgress10 () {
                                            document.getElementById("progressBar").innerHTML = "1 Second Left!";
                                            function displayIndependence () {
                                                document.getElementById("progressBar").innerHTML = "Happy Independence Day!";
                                            }
                                            setTimeout(displayIndependence,1000);
                                        }
                                        setTimeout(displayProgress10,1000);
                                    }
                                    setTimeout(displayProgress9,1000);
                                }
                                setTimeout(displayProgress8,1000);
                            }
                            setTimeout(displayProgress7,1000);
                        }
                        setTimeout(displayProgress6,1000);
                    }
                    setTimeout(displayProgress5,1000);
                }
                setTimeout(displayProgress4,1000);
            }
            setTimeout(displayProgress3,1000);
        }
        setTimeout(displayProgress2,1000);
    }
    setTimeout(displayProgress1,1000);
}    