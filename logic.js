let isA = [`Is Tall`, `Is A Skill Issue`, `Is FOR ROCK AND STONE!`];
let logoList = [`/Images/IconTall.png`, `/Images/iconSkillIssue.png`, `/Images/pickaxe.png`]
let signerList = [`Baked Beans`, `Karl`]

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
        updateDate();
    });

    document.getElementById(`stylechose`).addEventListener(`change`, function (valueData) {
        swaper(valueData.target.value);
    });

    document.getElementById(`print`).addEventListener(`click`, function () {
        updateDate();
        window.print();
    });

    function updateDate() {
        let todaysDate = new Date().toLocaleDateString(`en-us`, { year: "numeric", month: "numeric", day: "numeric" });
        document.getElementById(`date`).innerText = todaysDate;
    }

    function swaper(valueSwaper) {
        let sample = document.getElementById(`isWhat`)
        let swapingTime = document.getElementById(`plsWork`)
        let imgSwap = document.getElementById(`logo`)
        let signer = document.getElementById(`signed`)
        swapingTime.classList = `CertificateBox`
        switch (valueSwaper) {
            case `tall`:
                swapingTime.classList.add(`font1`);
                imgSwap.setAttribute(`src`, logoList[0]);
                sample.innerText = isA[0];
                signer.innerText = signerList[0]
                break;
            case `skill`:
                swapingTime.classList.add(`font2`);
                imgSwap.setAttribute(`src`, logoList[1]);
                sample.innerText = isA[1];
                signer.innerText = signerList[0]
                break;
            case `drg`:
                swapingTime.classList.add(`font3`);
                imgSwap.setAttribute(`src`, logoList[2]);
                sample.innerText = isA[2];
                signer.innerText = signerList[1]
                break;
        }
        updateDate();
    };

});
