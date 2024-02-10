let isA = [`Is Tall`, `Is A Skill Issue`, `Is FOR ROCK AND STONE!`];

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById(`userName`).addEventListener(`change`, function (nameOutput) {
        let Name = document.getElementById(`CertificateName`);
        let CertificateNameOutput = nameOutput.target.value;
        if (CertificateNameOutput.trim().length == 0) {
            Name.innerText = `Name`
        }
        else {
            Name.innerText = CertificateNameOutput
        };
    });

    document.getElementById(`stylechose`).addEventListener(`change`, function (valueData) {
        swaper(valueData.target.value);
    });

    document.getElementById(`print`).addEventListener(`click`, function () {
        window.print();
    });

    function swaper (valueSwaper) {
        let sample = document.getElementById(`CertificateName`)
        switch(valueSwaper) {
            case `tall`:
                if (sample.contains())
        }
    };

});
