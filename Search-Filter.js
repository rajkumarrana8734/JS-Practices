
        let searchInput = document.getElementById("searchInput");

        let items = document.querySelectorAll("#list li");


        searchInput.addEventListener("input", function () {

            let searchValue = searchInput.value.toLowerCase();


            items.forEach(function (item) {

                let itemName = item.textContent.toLowerCase();


                if (itemName.includes(searchValue)) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";

                }

            });

        });
