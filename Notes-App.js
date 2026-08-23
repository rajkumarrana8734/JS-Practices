

let noteInput =document.getElementById("noteInput");

let count =document.getElementById("count");

let addBtn =document.getElementById("addBtn");

let notes = document.getElementById("notes");





noteInput.addEventListener("input",function () {

        count.textContent =
            noteInput.value.length;

    }
);




addBtn.addEventListener("click",function () {

        let value =
            noteInput.value.trim();


        if (value === "") {

            alert("Write something!");

            return;

        }


        let note =document.createElement("div");


        note.innerHTML = `

            <p>${value}</p>

            <button class="deleteBtn">
                Delete
            </button>

        `;


        notes.append(note);


        noteInput.value = "";

        count.textContent = 0;

    }
);





notes.addEventListener("click",function (event) {

        if (
            event.target.classList
            .contains("deleteBtn")
        ) {

            event.target
                .parentElement
                .remove();

        }

    }
);
