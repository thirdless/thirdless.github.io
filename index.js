//;(function(){

    "use strict";
    try{
        let p = document.createElement("p");
        if(!("transform" in p.style) || !("filter" in p.style) || !("classList" in p) || !("requestAnimationFrame" in window) || !("CSS" in window)) throw "stop";
        performance.now();
        p = null;
    }
    catch(e){
        var error = document.createElement("div");
        error.className = "-error-panel overlay";
        error.innerHTML = "<div><h1>Your browser doesn't meet the minimum requirements this site has.</h1>Please update your browser or try another one.</div>";
        document.body.appendChild(error);
        throw "stop";
    }

    // some basic definitions but because of the frequent changes it will be more convenient to put them here lol

    let pages = [
        //pages
        {path: "", status: "home", create: createHome, destroy: destroyHome},
        {path: "/work", status: "work", create: createWork, destroy: destroyWork},

        //error pages
        {status: 404, create: create404, destroy: destroy404}
    ];

    let projects = [];

    let svgs = {
        smuwn: {
            // view: "0 0 135 32",
            // path: '<path d="M11 0.015c-0.053 0.005-0.229 0.021-0.394 0.033-1.473 0.127-2.784 0.478-4.048 1.084-2.376 1.141-4.067 2.994-4.871 5.339-0.332 0.972-0.466 1.803-0.466 2.92 0 0.941 0.067 1.648 0.229 2.397 0.308 1.438 1.041 2.813 2.011 3.771 0.707 0.702 1.414 1.196 2.326 1.631 1.235 0.59 2.354 0.981 4.764 1.662 1.927 0.547 2.947 1.01 3.682 1.679 0.69 0.626 0.967 1.387 0.888 2.438-0.091 1.211-0.492 2.003-1.285 2.534-0.817 0.549-1.824 0.767-3.291 0.712-0.922-0.033-1.619-0.189-2.519-0.561-0.757-0.315-1.106-0.506-2.925-1.612-0.492-0.298-0.795-0.399-1.256-0.418-0.234-0.01-0.344-0.005-0.485 0.026-0.432 0.098-0.812 0.325-1.065 0.64-0.06 0.074-0.599 0.927-1.204 1.894l-1.096 1.758 0.186 0.172c0.85 0.783 1.743 1.39 2.937 1.999 2.085 1.06 4.382 1.703 6.66 1.865 0.533 0.036 2.018 0.017 2.522-0.036 1.285-0.134 2.357-0.389 3.403-0.807 1.089-0.437 2.015-0.984 2.842-1.679 0.33-0.277 0.965-0.924 1.225-1.249l0.196-0.246v-11.906l-0.174-0.165c-0.829-0.783-1.516-1.249-2.615-1.765-1.287-0.604-2.457-1.032-4.733-1.731-1.435-0.442-2.405-0.85-3.08-1.301-0.571-0.38-0.915-0.736-1.113-1.146-0.177-0.363-0.208-0.523-0.21-1.051 0-0.38 0.01-0.494 0.053-0.7 0.282-1.306 1.225-2.125 2.739-2.381 0.382-0.064 0.657-0.084 1.218-0.084 1.051 0 1.676 0.119 2.679 0.516 0.552 0.217 0.793 0.334 1.719 0.836 0.451 0.246 0.9 0.475 0.993 0.513 0.525 0.203 1.134 0.184 1.54-0.05 0.279-0.162 0.611-0.542 0.864-0.993l0.119-0.213v-4.212l-0.291-0.17c-1.593-0.924-3.357-1.524-5.304-1.803-0.798-0.112-1.161-0.136-2.249-0.143-0.564-0.005-1.07-0.002-1.122 0.002z"/></path><path d="M33.411 9.054c-0.812 0.088-1.645 0.332-2.383 0.695-0.759 0.373-1.426 0.857-2.18 1.588-0.184 0.179-0.337 0.32-0.341 0.315s-0.091-0.289-0.191-0.63c-0.103-0.341-0.227-0.707-0.277-0.812-0.191-0.396-0.461-0.626-0.919-0.778l-0.167-0.057-4.573-0.014v22.305h6.662v-15.863l0.318-0.315c0.802-0.798 1.574-1.251 2.354-1.383 0.475-0.081 1.208-0.038 1.669 0.096 1.165 0.339 1.71 1.175 1.817 2.791 0.017 0.256 0.026 2.741 0.026 7.527v7.147h6.686v-7.259c0-4.984 0.007-7.333 0.026-7.493 0.11-1.001 0.506-1.746 1.206-2.264 0.363-0.27 0.831-0.466 1.297-0.544 0.265-0.045 0.886-0.05 1.163-0.012 0.456 0.062 0.924 0.236 1.237 0.461 0.21 0.15 0.509 0.475 0.64 0.697 0.174 0.294 0.306 0.647 0.392 1.048 0.107 0.501 0.105 0.332 0.105 8.064v7.302h6.686v-7.398c0-4.785-0.01-7.512-0.024-7.73-0.146-1.987-0.666-3.551-1.598-4.807-0.258-0.344-0.809-0.915-1.125-1.156-1.072-0.826-2.288-1.292-3.892-1.492-0.279-0.033-0.521-0.043-1.242-0.043-0.795 0-0.938 0.007-1.289 0.055-1.13 0.153-1.941 0.392-2.83 0.829-0.755 0.37-1.344 0.79-1.925 1.371-0.416 0.418-0.824 0.95-1.063 1.387-0.06 0.11-0.105 0.153-0.105 0.096 0-0.038-0.232-0.53-0.373-0.79-0.291-0.537-0.659-1.032-1.084-1.454-0.805-0.807-1.645-1.237-2.794-1.435-0.248-0.043-0.416-0.053-1.003-0.057-0.387-0.005-0.795 0.002-0.907 0.014z"/></path><path d="M121.25 9.042c-1.139 0.112-1.915 0.325-2.782 0.764-1.356 0.685-2.378 1.743-3.083 3.197-0.447 0.919-0.702 1.846-0.874 3.14-0.041 0.303-0.043 0.8-0.05 7.921l-0.005 7.601h6.66l0.01-7.314c0.01-7.799 0.005-7.455 0.129-8.016 0.076-0.351 0.148-0.549 0.313-0.867 0.368-0.712 0.96-1.153 1.774-1.318 0.406-0.084 1.106-0.084 1.586 0 0.919 0.158 1.87 0.635 2.799 1.402l0.27 0.222v15.892h6.662v-22.305l-4.573 0.014-0.191 0.064c-0.353 0.122-0.597 0.303-0.786 0.587-0.143 0.217-0.158 0.253-0.406 1.034l-0.22 0.683-0.201-0.189c-1.528-1.426-3.102-2.197-5.038-2.469-0.198-0.026-0.501-0.041-1.087-0.045-0.447-0.002-0.855-0.002-0.907 0.002z"/></path><path d="M56.817 16.96c0.01 8.324-0.002 7.677 0.141 8.532 0.272 1.636 0.867 2.992 1.791 4.098 0.955 1.139 2.333 1.944 3.854 2.252 0.621 0.127 0.869 0.146 1.791 0.146 1.07 0 1.457-0.045 2.297-0.263 1.454-0.38 2.706-1.094 3.947-2.252l0.201-0.189 0.22 0.683c0.248 0.781 0.263 0.817 0.406 1.034 0.189 0.284 0.432 0.466 0.786 0.587l0.191 0.064 4.573 0.014v-22.305h-6.662v15.892l-0.27 0.222c-0.929 0.767-1.879 1.244-2.799 1.402-0.48 0.084-1.18 0.084-1.586 0-0.814-0.165-1.406-0.607-1.774-1.318-0.165-0.318-0.236-0.516-0.313-0.867-0.124-0.561-0.119-0.217-0.129-8.019l-0.01-7.312h-6.66l0.005 7.598z"/></path><path d="M80.023 20.513v11.154l4.573-0.014 0.167-0.057c0.458-0.153 0.728-0.382 0.919-0.778 0.05-0.105 0.174-0.47 0.277-0.812 0.1-0.341 0.186-0.626 0.191-0.63s0.158 0.136 0.341 0.315c1.137 1.098 2.233 1.75 3.489 2.08 0.721 0.189 1.204 0.241 2.073 0.222 0.671-0.012 0.977-0.053 1.476-0.184 1.533-0.406 2.775-1.547 3.568-3.276 0.064-0.143 0.119-0.27 0.119-0.282 0-0.057 0.045-0.014 0.105 0.096 0.239 0.437 0.647 0.97 1.063 1.387 0.58 0.58 1.17 1.001 1.925 1.371 0.888 0.437 1.7 0.676 2.83 0.829 0.351 0.048 0.494 0.055 1.289 0.055 0.721 0 0.962-0.01 1.242-0.043 1.605-0.201 2.82-0.666 3.892-1.492 0.315-0.241 0.867-0.812 1.125-1.156 0.931-1.256 1.452-2.82 1.598-4.807 0.014-0.217 0.024-2.944 0.024-7.732v-7.395h-6.686v7.302c0 7.732 0.002 7.563-0.105 8.064-0.086 0.401-0.217 0.755-0.392 1.048-0.131 0.222-0.43 0.547-0.64 0.697-0.313 0.224-0.781 0.399-1.237 0.461-0.277 0.038-0.898 0.033-1.163-0.012-0.466-0.079-0.934-0.275-1.297-0.544-0.7-0.518-1.096-1.263-1.206-2.264-0.019-0.16-0.026-2.51-0.026-7.493v-7.259h-6.686v7.147c0 4.785-0.01 7.271-0.026 7.527-0.055 0.848-0.22 1.442-0.528 1.901-0.353 0.53-0.955 0.869-1.746 0.986-0.327 0.05-0.919 0.05-1.213 0-0.781-0.131-1.552-0.585-2.354-1.383l-0.318-0.315v-15.863h-6.662v11.152z"/></path>'
            view: "0 0 178 32",
            path: '<path d="M12.147 0.054c-4.643 0.28-8.182 1.934-10.042 4.702-1.065 1.58-1.512 3.18-1.453 5.207 0.044 1.423 0.25 2.346 0.771 3.386 0.795 1.58 2.562 3.092 4.53 3.872 1.242 0.491 3.072 1.026 5.899 1.723 3.21 0.79 3.961 1.021 4.893 1.507 1.261 0.648 1.855 1.443 1.855 2.493 0 0.736-0.245 1.301-0.81 1.865-0.849 0.849-2.022 1.252-4.079 1.404-3.534 0.26-7.804-0.864-10.739-2.827-0.265-0.177-0.496-0.319-0.515-0.319-0.034 0-2.405 5.202-2.425 5.32-0.020 0.088 1.129 0.815 1.929 1.227 2.356 1.202 5.291 1.993 8.491 2.292 0.849 0.079 3.416 0.083 4.245 0.005 3.283-0.314 5.811-1.222 7.804-2.807 1.615-1.286 2.724-3.156 3.097-5.227 0.108-0.604 0.123-2.287 0.025-2.896-0.201-1.261-0.604-2.282-1.227-3.121-0.319-0.422-1.163-1.252-1.683-1.644-0.594-0.447-1.261-0.839-1.899-1.124-1.080-0.481-3.382-1.188-5.674-1.742-2.503-0.609-2.866-0.702-3.656-0.937-1.443-0.437-2.405-0.864-2.915-1.286-0.82-0.687-1.060-1.973-0.564-3.068 0.294-0.653 0.859-1.198 1.639-1.585 1.016-0.501 2.091-0.697 3.853-0.702 1.129 0 1.782 0.044 2.65 0.196 1.767 0.304 3.637 0.952 5.345 1.84 0.363 0.191 0.677 0.324 0.697 0.304 0.029-0.029 1.531-3.686 2.11-5.129l0.093-0.236-0.383-0.226c-3.004-1.782-7.539-2.724-11.863-2.469z"></path><path d="M30.626 16v15.46h6.724l0.010-9.036 0.015-9.040 8.982 14.783 3.274-0.020 9.045-15.19 0.029 4.697c0.015 2.587 0.034 6.748 0.039 9.252l0.005 4.555h6.729l-0.029-6.788c-0.015-3.73-0.039-10.685-0.054-15.46l-0.029-8.672h-5.865l-5.688 9.595c-3.126 5.276-5.698 9.59-5.713 9.59s-2.621-4.314-5.791-9.59l-5.767-9.59-5.914-0.005v15.46z"></path><path d="M72.555 9.948c0.015 10.204 0.005 9.782 0.285 11.421 0.888 5.252 4.132 8.834 9.124 10.091 2.547 0.638 5.767 0.702 8.442 0.167 2.68-0.535 4.879-1.683 6.577-3.436 1.968-2.027 3.043-4.515 3.47-8.029 0.074-0.638 0.083-1.556 0.098-10.164l0.020-9.458h-7.067l-0.020 9.261c-0.015 8.437-0.025 9.32-0.098 9.85-0.309 2.125-0.903 3.494-1.963 4.53-0.825 0.805-1.841 1.315-3.102 1.561-0.982 0.186-2.459 0.186-3.46-0.005-2.645-0.501-4.285-2.258-4.883-5.237-0.245-1.227-0.236-0.933-0.255-10.724l-0.020-9.237h-7.166l0.020 9.409z"></path><path d="M107.73 16v15.46l5.914-0.005 5.767-9.59c3.171-5.276 5.777-9.59 5.791-9.59s2.587 4.314 5.713 9.59l5.688 9.595h5.865l0.029-8.677c0.015-4.771 0.039-11.725 0.054-15.46l0.029-6.783h-6.729l-0.005 4.55c-0.005 2.508-0.025 6.67-0.039 9.256l-0.029 4.697-9.045-15.19-3.274-0.020-8.982 14.783-0.015-9.040-0.010-9.036h-6.724v15.46z"></path><path d="M149.742 16v15.46h7.067l0.010-9.364 0.015-9.36 15.362 18.719 5.914 0.005v-30.92h-7.117l-0.010 9.355-0.015 9.36-15.313-18.709-5.914-0.005v15.46z"></path>'
        },
        github: {
            view: "0 0 32 32",
            path: '<path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>'
        },
        steam: {
            view: "0 0 32 32",
            path: '<path d="M15.972 0c-8.401 0-15.291 6.48-15.943 14.716l8.576 3.544c0.727-0.495 1.604-0.787 2.549-0.787 0.084 0 0.167 0.005 0.251 0.008l3.815-5.523v-0.079c0-3.327 2.704-6.032 6.032-6.032 3.325 0 6.032 2.708 6.032 6.036s-2.707 6.033-6.032 6.033h-0.14l-5.435 3.881c0 0.069 0.005 0.14 0.005 0.212 0 2.5-2.020 4.528-4.52 4.528-2.18 0-4.021-1.564-4.441-3.636l-6.14-2.543c1.901 6.716 8.067 11.64 15.391 11.64 8.836 0 15.999-7.164 15.999-16s-7.164-16-15.999-16zM10.053 24.28l-1.964-0.813c0.349 0.724 0.952 1.332 1.752 1.667 1.729 0.719 3.724-0.101 4.443-1.833 0.351-0.84 0.352-1.759 0.007-2.599s-1-1.495-1.836-1.844c-0.832-0.347-1.72-0.332-2.504-0.040l2.031 0.84c1.275 0.533 1.879 2 1.345 3.273-0.529 1.276-1.996 1.88-3.272 1.349h-0.001zM25.273 11.876c0-2.216-1.804-4.020-4.020-4.020-2.22 0-4.020 1.804-4.020 4.020 0 2.22 1.8 4.020 4.020 4.020 2.217 0 4.020-1.8 4.020-4.020zM18.243 11.869c0-1.669 1.351-3.021 3.020-3.021 1.665 0 3.021 1.352 3.021 3.021 0 1.668-1.356 3.020-3.021 3.020-1.671 0-3.020-1.352-3.020-3.020z"></path>'
        },
        spotify: {
            view: "0 0 32 32",
            path: '<path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"></path>'
        },
        twitter: {
            view: "0 0 32 32",
            path: '<path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>'
        },
        discord: {
            view: "0 0 32 32",
            path: '<path d="M26.963 0c1.875 0 3.387 1.516 3.476 3.3v28.7l-3.569-3.031-1.96-1.784-2.139-1.864 0.893 2.94h-18.717c-1.869 0-3.387-1.42-3.387-3.301v-21.653c0-1.784 1.52-3.303 3.393-3.303l22.009-0.004zM18.805 7.577h-0.040l-0.269 0.267c2.764 0.8 4.101 2.049 4.101 2.049-1.781-0.891-3.387-1.336-4.992-1.516-1.16-0.18-2.32-0.085-3.3 0h-0.267c-0.627 0-1.96 0.267-3.747 0.98-0.623 0.271-0.98 0.448-0.98 0.448s1.336-1.336 4.28-2.049l-0.18-0.18s-2.229-0.085-4.636 1.693c0 0-2.407 4.192-2.407 9.36 0 0 1.333 2.32 4.991 2.408 0 0 0.533-0.711 1.073-1.336-2.053-0.624-2.853-1.872-2.853-1.872s0.179 0.088 0.447 0.267h0.080c0.040 0 0.059 0.020 0.080 0.040v0.008c0.021 0.021 0.040 0.040 0.080 0.040 0.44 0.181 0.88 0.36 1.24 0.533 0.621 0.269 1.42 0.537 2.4 0.715 1.24 0.18 2.661 0.267 4.28 0 0.8-0.18 1.6-0.356 2.4-0.713 0.52-0.267 1.16-0.533 1.863-0.983 0 0-0.8 1.248-2.94 1.872 0.44 0.621 1.060 1.333 1.060 1.333 3.659-0.080 5.080-2.4 5.16-2.301 0-5.16-2.42-9.36-2.42-9.36-2.18-1.619-4.22-1.68-4.58-1.68l0.075-0.027zM19.029 13.461c0.937 0 1.693 0.8 1.693 1.78 0 0.987-0.76 1.787-1.693 1.787s-1.693-0.8-1.693-1.779c0.003-0.987 0.764-1.784 1.693-1.784zM12.972 13.461c0.933 0 1.688 0.8 1.688 1.78 0 0.987-0.76 1.787-1.693 1.787s-1.693-0.8-1.693-1.779c0-0.987 0.76-1.784 1.693-1.784z"></path>'
        },
        email: {
            view: "0 0 28 28",
            path: '<path d="M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z"></path>'
        },
        music: {
            view: "0 0 20 20",
            path: '<path d="M20 2.5v-2.5l-14 2v12.17c-0.297-0.108-0.639-0.17-0.996-0.17-0.002 0-0.003 0-0.005 0h-2c-1.657 0-3 1.343-3 3s1.343 3 3 3v0h2c1.657 0 3-1.343 3-3v0-11.29l10-1.41v7.88c-0.297-0.108-0.639-0.17-0.996-0.17-0.002 0-0.003 0-0.005 0h-2c-1.657 0-3 1.343-3 3s1.343 3 3 3h2c1.657 0 3-1.343 3-3v0-12.51z"></path>'
        },
        scroll: {
            view: "0 0 32 32",
            path: '<path d="M15.5 16c-2.209 0-4-1.791-4-4h-6v10c0 5.522 4.477 10 10 10s10-4.478 10-10v-10h-6c0 2.209-1.791 4-4 4zM11.5 8c0-2.209 1.791-4 4-4s4 1.791 4 4v2h6c0-5.523-4.477-10-10-10s-10 4.477-10 10h6v-2zM14.5 7v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path>'
        },
        nextarrow: {
            view: "0 0 32 32",
            path: '<path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>'
        },
        musicback: {
            view: "0 0 32 32",
            path: '<path d="M18 5v10l10-10v22l-10-10v10l-11-11z"></path>'
        },
        musicforth: {
            view: "0 0 32 32",
            path: '<path d="M16 27v-10l-10 10v-22l10 10v-10l11 11z"></path>'
        },
        play: {
            view: "0 0 32 32",
            path: '<path d="M8 4l22 12-22 12z"></path>'
        },
        pause: {
            view: "0 0 32 32",
            path: '<path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>'
        },
        shuffle: {
            view: "0 0 32 32",
            path: '<path d="M24 22h-3.172l-5-5 5-5h3.172v5l7-7-7-7v5h-4c-0.53 0-1.039 0.211-1.414 0.586l-5.586 5.586-5.586-5.586c-0.375-0.375-0.884-0.586-1.414-0.586h-6v4h5.172l5 5-5 5h-5.172v4h6c0.53 0 1.039-0.211 1.414-0.586l5.586-5.586 5.586 5.586c0.375 0.375 0.884 0.586 1.414 0.586h4v5l7-7-7-7v5z"></path>'
        },
        close: {
            view: "0 0 24 24",
            path: '<path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>'
        }
    };

    // main definitions

    function querySelector(el, cls){
        return el.querySelector(cls);
    }
    function querySelectorAll(el, cls){
        return el.querySelectorAll(cls);
    }
    function $(_){return undefined===_?document:querySelectorAll(document,_)}

    function createElement(param){
        param = typeof param === "undefined" ? "div" : param;
        return document.createElement(param);
    }

    function slowdom(){
        root.offsetWidth;
        root.getBoundingClientRect();
    }

    function delay(func, timeout){
        timeout = timeout || 0;
        return setTimeout(func, timeout);
    }

    let abs = Math.abs;

    function random(a, b){
        return Math.random() * (b - a) + a;
    }

    function shuffle(e){
        let j, x, a = e;
        for(let i = e.length - 1; i > 0; i--){
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    function bezier(p1x, p1y, p2x, p2y){
        let cx = 3.0 * p1x,
            bx = 3.0 * (p2x - p1x) - cx,
            ax = 1.0 - cx -bx,
            cy = 3.0 * p1y,
            by = 3.0 * (p2y - p1y) - cy,
            ay = 1.0 - cy - by,
            sampleCurveX = function(t) {
                return ((ax * t + bx) * t + cx) * t;
            },
            sampleCurveY = function(t) {
                return ((ay * t + by) * t + cy) * t;
            },
            sampleCurveDerivativeX = function(t) {
                return (3.0 * ax * t + 2.0 * bx) * t + cx;
            };

        function solveCurveX(x){
            let t0, t1,
                t2, x2,
                d2, i,
                epsilon = .0000125;

            for(t2 = x, i = 0; i < 8; i++){
                x2 = sampleCurveX(t2) - x;
                if(abs(x2) < epsilon) return t2;
                d2 = sampleCurveDerivativeX(t2);
                if(abs(d2) < 1e-6) break;
                t2 = t2 - x2 / d2;
            }

            t0 = 0.0;
            t1 = 1.0;
            t2 = x;

            if(t2 < t0) return t0;
            if(t2 > t1) return t1;

            while(t0 < t1){
                x2 = sampleCurveX(t2);
                if(abs(x2 - x) < epsilon) return t2;
                if(x > x2) t0 = t2;
                else t1 = t2;
                t2 = (t1 - t0) * .5 + t0;
            }

            return t2;
        }

        function solve(x){
            return sampleCurveY(solveCurveX(x));
        }

        return function(x){
            return solve(x);
        };
    }

    let easing = {
        ease: bezier(.25, .1, .25, 1),
        custom: bezier(.4, .3, .2, 1)
    };

    function elementVisible(obj){
        let percent = 1.5,
            top = obj.top - scrollingelement.scrollTop,
            off = obj.height,
            upper = top + (off / percent) < canvasheight,
            lower = top + off > off / percent;

        return lower && upper;
    }

    let loadingdiv,
        loadingtimeout,
        loadingtime,
        mintimeout = 1500,
        loadingtrans = 300;

    function createLoading(){
        if(loadingdiv) return;

        loadingdiv = createElement();
        loadingdiv.innerHTML = "<div></div>";
        loadingdiv.className = "-loading overlay";
        document.body.appendChild(loadingdiv);
        loadingtimeout = delay(function(){
            loadingtimeout = undefined;
            loadingdiv.classList.add("show");
            loadingtime = performance.now();
        }, 400);
    }

    function destroyLoading(){
        if(loadingdiv.parentNode === document.body) document.body.removeChild(loadingdiv);
        loadingtimeout = undefined;
        loadingdiv = undefined;
        loadingtime = undefined;
    }

    function hideLoading(func){
        loadingdiv.classList.remove("show");
        delay(function(){
            destroyLoading();
            func();
        }, loadingtrans);
    }

    function deleteLoading(func){
        if(typeof func !== "function") func = function(){};
        if(typeof loadingtimeout === "undefined"){
            if(loadingtime && loadingdiv){
                let time = performance.now();
                if(time - loadingtime > mintimeout) hideLoading(func);
                else delay(function(){
                    hideLoading(func);
                }, mintimeout - time + loadingtime);
            }
            else func();
        }
        else{
            clearTimeout(loadingtimeout);
            destroyLoading();
            func();
        }
    }

    function svg(id, attr, asElement){
        let div = createElement("svg");
        if(typeof attr === "object") for(let i in attr) div.setAttribute(i, attr[i]);
        if(id in svgs){
            div.setAttribute("viewBox", svgs[id].view);
            div.innerHTML = svgs[id].path;
        }
        if(asElement) return div;
        else return div.outerHTML;
    }

    function smoothscroll(target, speed, factor){

        if(target === document) target = document.documentElement;

        let moving = false,
            pos = -1;

        function normalize(e){
            if(e.detail){
                if(e.wheelDelta) return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1);
                else return -e.detail / 3;
            }
            else return e.wheelDelta / 120;
        }

        function update(){
            moving = true;
            let delta = (pos - target.scrollTop) / factor;
            target.scrollTop += delta;

            if(abs(delta) > 1) requestAnimationFrame(update);
            else{
                moving = false;
                pos = -1;
            }
        }

        function scrolling(e){
            if(scrollactive || musicopened) return;
            if(pos === -1) pos = target.scrollTop;

            e.preventDefault();
            let delta = normalize(e);
            pos += -delta * speed;
		    pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight));
            if(!moving) update();
        }

        target.addEventListener("wheel", scrolling, {passive: false});
    }

    let scrollactive = false;

    function scroll(element, duration){
        if(scrollactive) return;
        scrollactive = true;
        let start = scrollingelement.scrollTop,
            starttime = performance.now(),
            height = scrollingelement.scrollHeight - scrollingelement.offsetHeight,
            destination,
            elementtop = element.getBoundingClientRect().top;

        if(typeof element === "number") destination = element;
        else destination = scrollingelement.scrollTop + elementtop;

        if(destination > height) destination = height;

        function scrolling(){
            let now = performance.now(),
                time = Math.min(1, ((now - starttime) / duration)),
                func = easing.custom(time);

            scrollingelement.scrollTop = (func * (destination - start)) +  start;
            if(abs(scrollingelement.scrollTop - destination) < 1){
                scrollactive = false;
                return;
            }
            requestAnimationFrame(scrolling);
        }
        scrolling();
    }

    function touchstart(){
        document.body.style.overflow = "initial";
    }

    function touchenable(){
        root.addEventListener("touchstart", touchstart, {passive: false});
    }

    function averageRGB(image){
        let localcanvas = createElement("canvas"),
            localcontext = localcanvas.getContext("2d"),
            width = localcanvas.width = image.naturalWidth,
            height = localcanvas.height = image.naturalHeight,
            data,
            rgb = {r: 0, g: 0, b: 0};

        localcontext.drawImage(image, 0, 0);
        data = localcontext.getImageData(0, 0, width, height).data;

        for(let i = 0; i < data.length; i += 4){
            rgb.r += data[i];
            rgb.g += data[i+1];
            rgb.b += data[i+2];
        }

        rgb.r = Math.floor(rgb.r / (data.length / 4));
        rgb.g = Math.floor(rgb.g / (data.length / 4));
        rgb.b = Math.floor(rgb.b / (data.length / 4));

        return rgb;
    }

    function contrastRGB(a){
        return (a.r * 299 + a.g * 587 + a.b * 114) / 1000 >= 128 ? 0 : 1;
    }

    // page content manager

    let status = null,
        next = {},
        transition = false,
        navigated = false,
        projectstring = "project - ",
        projectpath = "/project/",
        transtime = 600,

        root,
        canvas,
        context,

        scrollingelement,
        scrollingframe,

        canvaswidth,
        canvasheight;


    let home = {},
        homeduration = 500,
        homedensity = 15,
        homeactive = false,
        homecircles = [],
        homecolors = [
            {r: 229, g: 57, b: 53},
            {r: 48, g: 63, b: 159},
            {r: 0, g: 121, b: 107},
            {r: 85, g: 139, b: 47},
            {r: 69, g: 39, b: 160}
        ];

    let homeelement,
        hometextlines;

    function homeapplyintro(){
        home.introdiv.style.transform = "translate3d(" + home.intro.x + "px, " + home.intro.y + "px, " + home.intro.z + "px)";
    }

    function homemove(){
        let center = -(home.mouse.x - home.width / 2),
            formula = (center / 400).toFixed(5),
            temp = parseFloat(((formula - home.intropos) / 5).toFixed(5));

        if(temp === 0){
            home.moveactive = false;
            return;
        }
        else home.intropos += temp;

        home.intro.x = home.intropos;
        homeapplyintro();
    }

    function homescroll(){
        let offset = scrollingelement.scrollTop,
            opacity = Math.min(offset / canvasheight, 1),
            scroll = Math.max(0, offset / 3);

        if(offset <= canvasheight){
            home.introscrolled = false;
            canvas.style.transform = "scale(" + (1 + offset / 3000) + ")";

            home.intro.z = -scroll;
            homeapplyintro();
        }
        else home.introscrolled = true;

        if(home.introopacity !== opacity){
            home.overlayelement.style.opacity = opacity;
            if(opacity != 0) home.overlayelement.style.visibility = "visible";
            else home.overlayelement.style.visibility = "";
            home.introopacity = opacity;
        }

    }

    function homemedian(){
        let num = Math.floor(Math.random() * (homedensity + 1));
        if(~home.usedmedian.indexOf(num)) return homemedian();
        home.usedmedian.push(num);
        return random(home.medianh * num, home.medianh * (num + 1));
    }

    function homemouse(e){
        home.moveactive = true;
        home.mouse.x = e.clientX;
        home.mouse.y = e.clientY;
    }

    function homeenter(){
        if(!home.entertime) home.entertime = performance.now();
        let time = (performance.now() - home.entertime) / homeduration,
            ease = easing.custom(time);
        if(time > 1){
            home.enter = false;
            home.opacity = 1;
            home.position.y = 0;
        }
        else{
            home.opacity = ease;
            home.position.y = home.entereffect * (1 - ease);
        }
    }

    function homeleave(){
        if(!home.leavetime){
            home.leavetime = performance.now();
            home.leaveopacity = home.opacity;
            home.leaveposition = home.position.y;
            home.leaveremaining = home.entereffect - home.position.y;
        }
        let time = (performance.now() - home.leavetime) / homeduration,
            inverttime = 1 - time;
        if(time < 0) home.leave = false;
        else{
            home.opacity = easing.custom(inverttime) * home.leaveopacity;
            home.position.y = home.leaveposition - easing.custom(time) * home.leaveremaining;
        }
    }

    function rendercircle(circle){
        let size = 200 / circle.size,
            posx = ((home.mouse.x - circle.position.x) / 25) * size,
            posy = ((home.mouse.y - circle.position.y) / 25) * size;

        circle.last.x += (posx - circle.last.x) / 5;
        circle.last.y += (posy - circle.last.y) / 5;

        context.beginPath();
        context.arc(circle.last.x  + circle.position.x + home.position.x, circle.last.y + circle.position.y + home.position.y, circle.size, 0, 2 * Math.PI);
        context.fillStyle = "rgba(" + circle.color.r + ", " + circle.color.g + ", " + circle.color.b + ", " + circle.transparency * home.opacity + ")";
        context.fill();
    }

    function homerender(){
        context.clearRect(0, 0, canvas.width, canvas.height);

        if(home.enter) homeenter();
        else if(home.leave) homeleave();

        for(let i in homecircles) rendercircle(homecircles[i]);

        if(home.moveactive && !home.introscrolled) homemove();

        if(homeactive) requestAnimationFrame(homerender);
    }

    function homecircle(){
        let self = this;
        self.position = {};
        self.last = {};

        self.position.x = random(home.medianw * home.increment, home.medianw * (home.increment + 1));
        self.position.y = homemedian();
        self.last.x = 0;
        self.last.y = 0;
        self.transparency = random(.1, .3);
        self.size = random(home.factor / 2, home.factor);
        self.color = homecolors[Math.floor(Math.random() * homecolors.length)];
        home.increment++;
    }

    function createhomecanvas(){

        home.width = canvaswidth;
        home.height = canvasheight;
        home.factor = (home.width / 1080) * 250;
        home.medianw = home.width / homedensity;
        home.medianh = home.height / homedensity;
        home.increment = 0;
        home.usedmedian = [];
        home.opacity = 0;
        home.position = {x: 0, y: 0};
        home.entereffect = home.height * .3;

        home.intropos = 0;
        home.introopacity = 0;
        home.introscrolled = false;

        homeactive = true;
        home.moveactive = false;
        home.enter = true;

        for(let i = 0; i < homedensity; i++) homecircles.push(new homecircle());
        homerender();
        homeelement.addEventListener("mousemove", homemouse);

    }

    function deletehomecanvas(){
        home.enter = false;
        home.leave = true;
        home.moveactive = false;

        delay(function(){
            homeactive = false;
            homecircles = [];
            homeelement.removeEventListener("mousemove", homemouse);
        }, homeduration);
    }

    function homemenuitem(classname, name, datahref){
        return `<div class="${classname}" ${datahref ? 'data-href="' + datahref + '"' : ""}><span>${name}</span></div>`;
    }

    function createlines(text, div){
        let words = text.split(" "),
            lines = [],
            textheight;

        div.style.visibility = "hidden";
        div.innerHTML = words[0];
        textheight = div.offsetHeight;
        for(let i = 1; i < words.length; i++){
            div.innerHTML += " " + words[i];
            if(textheight < div.offsetHeight){
                textheight = div.offsetHeight;
                lines.push(div.innerHTML.length - words[i].length - 1);
            }
        }
        lines.push(div.innerHTML.length);
        div.innerHTML = "";

        for(let i = 0; i < lines.length; i++){
            let starttext = i === 0 ? 0 : lines[i - 1] + 1,
                endtext = i === lines.length - 1 ? text.length : lines[i],
                el = createElement();
            el.className = "line";
            el.innerHTML = "<span>" + text.substring(starttext, endtext) + "</span>";
            div.appendChild(el);
        }
        div.style.visibility = "";
    }

    function homeaboutlines(text1, text2, el){
        if(el.length === 2){
            createlines(text1, el[0]);
            createlines(text2, el[1]);
        }
    }

    function homeremovescrollbutton(e){
        querySelector(homeelement, ".scroll").classList.add("hide");
        e.target.removeEventListener("scroll", homeremovescrollbutton);
    }

    function homebindbuttons(){
        let scrollbutton = querySelector(homeelement, ".scroll");

        function redirectpart(e){
            scrollbutton.removeEventListener("click", redirectpart);
            scrollbutton.classList.add("hide");

            let temp;
            if(e.currentTarget === scrollbutton) temp = ".secondary";
            scroll(querySelector(homeelement, temp), 1000);
        }

        scrollbutton.addEventListener("click", redirectpart);
        scrollingframe.addEventListener("scroll", homeremovescrollbutton);
    }

    function homesetskew(){
        let element = window.getComputedStyle(querySelector(homeelement,".next"), ':before'),
            height = parseFloat(element.height, 10),
            width = parseFloat(element.width, 10),
            formula = Math.asin(height / Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))) * 180 / Math.PI;

        document.documentElement.style.setProperty("--skew-tilt", formula + "deg");
    }

    let homenextinterval,
        homenexttime,
        homenextcircle;

    function homenextstart(e){
        homenextcircle.style.animation = "";
        homenextcircle.classList.add("show");

        slowdom();

        homenextinterval = delay(function(){
            e.target.click();
        }, homenexttime);

        homenextcircle.style.animation = "progress " + homenexttime / 1000 + "s cubic-bezier(.4, .3, .2, 1) forwards";

    }

    function homenextstop(){
        homenextcircle.style.animationPlayState = "paused";
        homenextcircle.classList.remove("show");

        if(typeof homenextinterval !== "undefined"){
            clearTimeout(homenextinterval);
            homenextinterval = undefined;
        }
    }

    function homesetnext(element, time){
        homenexttime = time;

        let div = createElement();
            parent = querySelector(element, "div");

        div.className = "spinner";
        div.innerHTML = "<svg viewBox=\"0 0 100 100\"><circle/></svg>";

        let svg = querySelector(div, "svg");
        homenextcircle = querySelector(svg, "circle");

        parent.appendChild(div);
        document.documentElement.style.setProperty("--stroke-length", homenextcircle.getTotalLength());

        element.addEventListener("mouseenter", homenextstart);
        element.addEventListener("mouseleave", homenextstop);
    }

    //NOTE REMOVE AFTER DESTROYING
    let aboutlines = [];

    function homelinesscroll(el){
        let divs = querySelectorAll(el, ".line");
        for(let i = 0; i < divs.length; i++){
            aboutlines.push(delay(function(){
                divs[i].classList.add("show");
            }, i * 100));
        }
    }

    let introlinestimeouts = [],
        scrolldivs = [],
        homedivs;

    function homedivsscroll(){
        for(let i = 0; i < scrolldivs.length; i++){
            if(elementVisible(scrolldivs[i])){
                if(scrolldivs[i].el === homedivs.desc1 || scrolldivs[i].el === homedivs.desc2)  homelinesscroll(scrolldivs[i].el);
                else scrolldivs[i].el.classList.add("show");

                scrolldivs.splice(i, 1);
                i--;
            }
        }
        if(!scrolldivs.length) scrollingframe.removeEventListener("scroll", homedivsscroll);
    }

    function hometransitions(){
        let sec = ".secondary ",
            introlines = querySelectorAll(homeelement, ".intro .line");

        homedivs = {
            links: querySelector(homeelement, sec + ".links"),
            desc1: querySelector(homeelement, sec + ".desc>div:first-of-type"),
            desc2: querySelector(homeelement, sec + ".desc>div:last-of-type"),
            skills: querySelector(homeelement, sec + ".skills"),
            contact: querySelector(homeelement, sec + ".contact")
        };

        for(let i = 0; i < introlines.length; i++){
            introlinestimeouts.push(delay(function(){
                introlines[i].classList.add("show");
            }, i * 100));
        }

        for(let i in homedivs) scrolldivs.push({el: homedivs[i], top: homedivs[i].getBoundingClientRect().top, height: homedivs[i].offsetHeight});

        scrollingframe.addEventListener("scroll", homedivsscroll);

        let skills = querySelectorAll(homedivs.skills, "p"),
            skillsspan = querySelector(homedivs.skills, "span"),
            skillsh2 = querySelector(homedivs.skills, "h2"),
            text;
        for(let i = 0; i < skills.length / 3; i++){
            text = "." + (i + 1) + "s";
            skills[i * 3].style.transitionDelay = text;
            skills[i * 3 + 1].style.transitionDelay = text;
            skills[i * 3 + 2].style.transitionDelay = text;
        }
        skillsspan.style.transitionDelay = text;
        skillsh2.style.transitionDelay = text;
    }

    function createHome(){
        let content = `
                <div class="main">
                    <div class="effects"></div>
                    <div class="home-overlay"></div>
                    <div class="intro">
                        <div>
                            <div class="header">
                                <div class="logo">${svg("smuwn")}</div>
                                <div class="menu">
                                    ${homemenuitem("music", svg("music") + "Music")}
                                    <div class="separator music-sep"></div>
                                    ${homemenuitem("work link", "Work.", "/work")}
                                    ${homemenuitem("blog link", "Blog.", "https://blog.smuwn.xyz")}
                                </div>
                            </div>
                            <div class="text"></div>
                            <div class="scroll">
                                <div>${svg("scroll")}<span>Scroll down</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="secondary">
                    <div class="links">
                        <div data-href="https://github.com/thirdless" data-target="_blank">${svg("github")}</div>
                        <div data-href="https://steamcommunity.com/id/smuwn" data-target="_blank">${svg("steam")}</div>
                        <div data-href="https://open.spotify.com/user/smuwn" data-target="_blank">${svg("spotify")}</div>
                        <div data-href="https://twitter.com/game4ro" data-target="_blank">${svg("twitter")}</div>
                    </div>
                    <div class="desc">
                        <div>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                    <div class="skills">
                        <h1>Some things I can do better</h1>
                        <div>
                            <p class="g">HTML</p>
                            <p class="g">CSS3</p>
                            <p class="g">ES6</p>
                            <p class="g">jQuery</p>
                            <p class="g">PHP</p>
                            <p class="g">MySQL</p>
                            <p class="g">Node.JS</p>
                            <p class="g">APIs</p>
                            <p class="g">Joomla</p>
                            <p class="m">Wordpress</p>
                            <p class="m">C/C++</p>
                            <p class="b">Java</p>
                            <p class="b">Electron</p>
                            <p class="b">Python</p>
                            <p class="b">CoffeeScript</p>
                        </div>
                        <span></span>
                        <h2>^ The "the farthest, the more-suckness" spectrum.</h2>
                    </div>
                    <div class="contact">
                        <p>For collaborations, questions or freelance projects, contact me via:</p>
                        <p>${svg("discord")}Discord at <span>smuwn#9706</span></p>
                        <p data-href="mailto:me@smuwn.xyz">${svg("email")}Email at <span>me@smuwn.xyz</span></p>
                    </div>
                </div>
                <div class="next" data-href="/work">
                  <div>
                    My work. ${svg("nextarrow")}
                  </div>
                </div>
                `,
            text = "I'm Ioan, a student living in Romania. Mostly doing programming, listening to music, gaming and whatnot. Huge technology and bass addict, messing with different aspects of programming and design, working with efficiency and minimalism in mind.",
            text1 = "Hi there, I'm Ioan, a 18 year old \"Automatic Control and Computer Engineering\" student based in Romania. Mostly focusing on front end developing, but also on back end, software, servers, networking and occasionally working on some small open-source libraries and other \"for-fun\" projects.",
            text2 = "Even though I'm a little bit lazy, I like to be competitive sometimes and that pretty much summaries my taste of activities. Tending to listen to music everytime I do something, I don't have a preffered genre, but the most of my favorites are rock and electronic - EDM, Trap, DnB, whatever.";

        homeelement = createElement();
        homeelement.className = "home";
        homeelement.innerHTML = content;
        root.appendChild(homeelement);

        createlines(text, querySelector(homeelement, ".text"));
        homeaboutlines(text1, text2, querySelectorAll(homeelement, ".secondary .desc p"));

        home.mouse = {x: 0, y: 0};
        home.introdiv = querySelector(homeelement, ".intro>div");

        slowdom();

        homeelement.classList.add("show");

        home.overlayelement = querySelector(homeelement, ".home-overlay");
        home.intro = {x: 0, y: 0, z: 0};
        scrollingframe.addEventListener("scroll", homescroll);

        createhomecanvas();
        hometransitions();
        homebindbuttons();
        homesetskew();
        homesetnext(querySelector(homeelement, ".next"), 5000);
        musicinit();
        showmusicbutton();

        delay(function(){
            transition = false;
        }, transtime);
    }

    function destroyHome(){
        homenextstop();

        homeelement.classList.remove("show");
        homeelement.classList.add("hide");

        scrollingframe.removeEventListener("scroll", homescroll);
        deletehomecanvas();

        delay(function(){
            home = {};
            root.removeChild(homeelement);
            homeelement = null;
        }, transtime);

    }

    function createWork(){}
    function destroyWork(){}

    function create404(){createHome();}
    function destroy404(){destroyHome();}


    // music functions

    let musicsettings = {
        playing: 0,
        shuffle: 0,
        volume: 60,
        songplaying: 0,
        songlist: [],
        progress: 0
    },
        musicopened = false,
        musicdiv,
        musicoverlay,
        musicbuttons = {},
        musicobject,
        musicinitialized,
        musiclink = "https://cast.smuwn.xyz/music/",
        musicstatus = {
            time: null,
            slider: null,
            playbutton: null,
            backbutton: null,
            forthbutton: null,
            error: null,
            color: null
        },
        musiclistimages = [],
        musicmainimage;

    //NOTE change from 404 to home
    function showmusicbutton(){
        if(status === "home" || status === 404){
            querySelector(homeelement, ".header .music").classList.add("show");
            querySelector(homeelement, ".header .music-sep").classList.add("show");
            querySelector(homeelement, ".header .music").addEventListener("click", musicopen);
        }
        else if(status === "work"){

        }
    }

    function musicerror(){
        musicstatus.error = true;
    }

    function musiclistimageload(e){
        for(let i = 0; i < musiclistimages.length; i++){
            if(e.target === musiclistimages[i][0]) querySelector(musiclistimages[i][1], ".image").classList.add("show");
        }
    }

    function musiclistclick(e){
        let songs = [].slice.call(querySelectorAll(musicdiv, ".list .song")),
            target = e.target;

        while(true){
            if(target === e.currentTarget) return;
            else if(target.classList.contains("song")) break;
            target = target.parentNode;
        }

        let index = songs.indexOf(target);
        if(~index){
            musicchange(index);
            musictoggle(1);
        }
    }

    function musicupdatelist(){
        let songs = musicsettings.songlist,
            list = querySelector(musicdiv, ".list");

        list.innerHTML = "";

        for(let i = 0; i < songs.length; i++){
            let div = createElement();
            div.className = "song";
            div.innerHTML = `
                <div class="image" style="background-image:url(${songs[i].pic})"></div>
                <div class="name">
                    <div class="title">${songs[i].title}</div>
                    <div class="artist">${songs[i].artist}</div>
                </div>
            `;

            musiclistimages.push([new Image(), div]);
            musiclistimages[i][0].crossOrigin = "anonymous";
            musiclistimages[i][0].addEventListener("load", musiclistimageload);
            musiclistimages[i][0].src = songs[i].pic;

            list.appendChild(div);
        }

        list.addEventListener("click", musiclistclick);
    }

    function musicmainimageload(e){
        let average = averageRGB(e.target),
            contrast = contrastRGB(average);

        if(contrast) musicdiv.classList.add("white");
        else musicdiv.classList.remove("white");

        querySelector(musicdiv, ".main").style.background = "rgb(" + average.r + "," + average.g + "," + average.b + ")";
        slowdom();
        querySelector(musicdiv, ".main>.image>.img").classList.add("show");
    }

    function musicplayerdata(){
        musicstatus.backbutton = 1;
        musicstatus.forthbutton = 1;
        if(musicsettings.songplaying === 0) musicstatus.backbutton = 0;
        if(musicsettings.songplaying + 1 === musicsettings.songlist.length) musicstatus.forthbutton = 0;

        if(musicopened){
            let song = musicsettings.songlist[musicsettings.songplaying];

            if(!musicstatus.backbutton) musicbuttons.back.classList.add("disabled");
            else musicbuttons.back.classList.remove("disabled");

            if(!musicstatus.forthbutton) musicbuttons.forth.classList.add("disabled");
            else musicbuttons.forth.classList.remove("disabled");

            querySelector(musicdiv, ".main>.image>.img").classList.remove("show");
            querySelector(musicdiv, ".main>.image>.img").style.backgroundImage = "url(" + song.pic + ")";

            querySelector(musicdiv, ".main>.name").innerHTML = `
                <div class="title">${song.title}</div>
                <div class="artist">${song.artist}</div>
                <div class="time">0:00</div>
            `;

            musicmainimage = new Image();
            musicmainimage.addEventListener("load", musicmainimageload);
            musicmainimage.crossOrigin = "anonymous";
            musicmainimage.src = song.pic;

            let songslist = querySelectorAll(musicdiv, ".list .song");
            for(let i = 0; i < songslist.length; i++){
                songslist[i].classList.remove("active");
            }
            songslist[musicsettings.songplaying].classList.add("active");

            musicplayerplay();
        }
    }

    function musicplayerplay(){
        if(musicsettings.playing) musicbuttons.play.innerHTML = svg("pause");
        else musicbuttons.play.innerHTML = svg("play");
    }

    function musicplayertime(){
        if(musicopened){
            querySelector(musicdiv, ".main>.name>.time").innerHTML = musicstatus.time;
            querySelector(musicdiv, ".main>.progress").style.width = musicstatus.slider + "%";
        }
    }

    function musictimeupdate(e){
        if(e.type === "ended"){
            if(musicsettings.songplaying + 1 === musicsettings.songlist.length) musictoggle(0);
            else musicchange(null, 1);
        }
        else{
            let percent = musicobject.currentTime / musicobject.duration * 100,
                time = musicobject.duration - musicobject.currentTime,
                seconds = parseInt(time) % 60,
                formatted = "-" + Math.floor(time / 60) + ":" + (seconds < 10 ? "0" + seconds : seconds);

            musicstatus.slider = percent;
            musicstatus.time = formatted;

            if(musicobject.readyState >= 2) musicplayertime();
        }
    }

    function musicplayerinit(){
        musicobject = new Audio();
        musicobject.volume = .6;
        musicobject.src = musiclink + musicsettings.songlist[musicsettings.songplaying].link + ".mp3";
        musicplayerdata();
        musicobject.addEventListener("timeupdate", musictimeupdate);
        musicobject.addEventListener("ended", musictimeupdate);
        musicobject.addEventListener("error", musicerror);
    }

    function musictoggle(param){
        if(typeof musicobject === "undefined") musicplayerinit();

        if(param === 0 || (typeof param === "undefined" && musicsettings.playing)){
            musicobject.pause();
            musicsettings.playing = 0;
        }
        else if(param === 1 || !musicsettings.playing){
            musicobject.play();
            musicsettings.playing = 1;
        }

        musicplayerplay();
    }

    function musicchange(songindex, songpos){
        let current;

        if(songindex === null) current = songpos + musicsettings.songplaying;
        else current = songindex;

        if(current < 0) current = 0;
        else if(current + 1 >= musicsettings.songlist.length) current = musicsettings.songlist.length - 1;

        if(musicsettings.songplaying == current) return;

        musicobject.src = musiclink + musicsettings.songlist[current].link + ".mp3";
        musicsettings.songplaying = current;
        if(musicsettings.playing) musictoggle(1);
        musicplayerdata();
    }

    function musiccontrol(e){
        if(e.currentTarget === musicbuttons.play) musictoggle();
        else if(e.currentTarget === musicbuttons.back) musicchange(null, -1);
        else if(e.currentTarget === musicbuttons.forth) musicchange(null, 1);
    }

    function musicclose(e){
        e.currentTarget.removeEventListener("click", musicclose);
        musicdiv.classList.remove("show");
        musicoverlay.classList.remove("show");
        delay(function(){
            musicdiv.parentNode.removeChild(musicdiv);
            musicoverlay.parentNode.removeChild(musicoverlay);
            musicopened = false;
        }, 400);
    }

    function musicopen(){
        if(musicopened) return;

        let overlay = createElement(),
            div = createElement();

        musicdiv = div;
        musicoverlay = overlay;
        musiclistimages = [];

        overlay.className = "music-overlay";
        div.className = "music-div";

        div.innerHTML = `
            <div class="close">${svg("close")}</div>
            <div class="main">
                <div class="backwards">${svg("musicback")}</div>
                <div class="image">
                    <div class="img"></div>
                    <div class="play">${svg("play")}</div>
                </div>
                <div class="forwards">${svg("musicforth")}</div>
                <div class="name"></div>
                <div class="progress"></div>
            </div>
            <div class="list"></div>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(div);

        musicbuttons.play = querySelector(div, ".image .play");
        musicbuttons.back = querySelector(div, ".backwards");
        musicbuttons.forth = querySelector(div, ".forwards");

        musicbuttons.play.addEventListener("click", musiccontrol);
        musicbuttons.back.addEventListener("click", musiccontrol);
        musicbuttons.forth.addEventListener("click", musiccontrol);

        musicopened = 1;
        musicupdatelist();
        musicplayerdata();

        querySelector(musicdiv, ".close").addEventListener("click", musicclose);
        slowdom();

        musicdiv.classList.add("show");
        overlay.classList.add("show");
    }

    function musicparse(){
        let string = '[{"n":"Arilena Ara - Nentori (Bess Remix)","i":"1ZcutmuyNmcHm1uiIvJzcmC_nOhbXDfND"},{"n":"aywy & Ekali - Another Girl","i":"1TYyiPTuIuIqRguwDT3NsKBrGYlHtfNVI"},{"n":"BLR - La Luna","i":"19-A64XAvuYKB1w_iVA0XPtmBDPU0VhPb"},{"n":"Carla\'s Dreams - Te Rog (Pascal Junior Remix)","i":"1sk3jGllwUaAfA7gFYtwhTSGXgmlLTz7z"},{"n":"Childish Gambino - Terrified (Zikomo Remix)","i":"1Pm2HJb_jJCinXQlpjvca1lggPBVTA72u"},{"n":"Destiny\'s Child - Say My Name (Cyril Hahn Remix)","i":"1nHqE_THyHvLMgC4va-doQhTq2WRRLLMS"},{"n":"Faydee - Crazy (Robert Cristian Remix)","i":"1YpUbNIkoZfDrpe3dIXdBN6G8AFvSyqBR"},{"n":"Giraffe Squad - Wait For Me","i":"1-FQMyqagvaklYolpli0M1XjkyK__ADrk"},{"n":"Illenium - I\'ll Be Your Reason","i":"1-cfF6Xmz2hV8Q6elWCYcxC7_YLFw4pLd"},{"n":"joji - will he (medasin remix)","i":"1OALjtVulnv2dDgPIZmP2z5Dzrnk54mqk"},{"n":"Lana Del Rey - Blue Jeans (RAC Remix)","i":"1YGMTq4B8pwXl_ovVQZ6h-Y78WpbuV1h8"},{"n":"Losco - Scriptina","i":"1IKd4GeJCfC0fsPbwAN6O8osUvwXTNbBX"},{"n":"MOSSS - Here if You Want (Pale Blue)","i":"1tzODXbHWgTxsiO4E5cqfrJvPDvECVUPA"},{"n":"Rihanna - Pon De Replay (Ed Marquis & Emie Cover)","i":"1wP5UbF6fgEmoze_5E1YN0PpqPZD423ZA"},{"n":"RÜFÜS - Say A Prayer For Me","i":"1xjs-E9ih7MQTW6U7AMTBO8kXrqKi0oz0"},{"n":"Tchami feat. Illangelo & Chuck Ellis - Alone","i":"1NWn-aPFg20rzWKJTdOW2RzfxJuUKQ9g_"},{"n":"Tinie Tempah - Not Letting Go ft. Jess Glynne (XYconstant Remix)","i":"16mLVli_Z0zjG_om9W2uD4tDb8kchtu3W"},{"n":"TKDJS - Don\'t Leave","i":"1Hfx447LhPpzddRxCjkr6oqyc-fvwRJoJ"},{"n":"Vanotek Feat. Eneli - Back To Me (Robert Cristian Remix)","i":"123ehBOf9NJWnY4rIOHx-bga10kWbSArD"},{"n":"Vérité - Gesture (BKAYE Remix)","i":"1bqL5jrWfRnt6qnBMFOBSWue22UJCKtxE"}]';

        let parsed = JSON.parse(string);

        for(let i = 0; i < parsed.length; i++){
            let name = parsed[i].n.split(" - "),
                pic;
            if(parsed[i].p) pic = parsed[i].p;
            else pic = "https://cast.smuwn.xyz/thumbnails/" + parsed[i].i + ".jpg";
            musicsettings.songlist.push({artist: name[0], title: name[1], link: parsed[i].i, pic: pic});
        }

        shuffle(musicsettings.songlist);
        musicplayerinit();
        musicinitialized = true;
    }

    function musicinit(){
        if(musicinitialized) return;
        // let request = new XMLHttpRequest();
        // request.open("GET", "/music/list.json", true);
        // request.onreadystatechange = function(){
        //     if(this.readyState === 4 && this.status === 200){
        //         //musicparse();
        //     }
        // }
        // request.send();
        musicparse();
    }


    // url handling

    function getquery(query, param){
        query = query.substring(1);
        let list = query.split("&"),
            temp;
        for(let i = 0; i < list.length; i++){
            temp = list[i].split("=");
            if(param === temp[0]) return temp[1];
        }
        return null;
    }

    function changequery(query, param){
        let queries,
            temp,
            string = "?";
        if(!query.length || query.length === 1) return "";
        else{
            query = query.substring(1);
            queries = query.split("&");
            for(let i = 0; i < queries.length; i++){
                temp = queries[i].split("=");
                if(param !== temp[0]){
                    if(i) string += "&";
                    string += queries[i];
                }
            }
            if(string.length === 1) return "";
            return string;
        }
    }

    function checkpath(a, b){
        if(a === b || a === b + "/") return true;
        return false;
    }

    function render(pushstate, loading){
        if(transition) return;
        else if(loading !== false) createLoading();

        transition = true;
        scrollingelement.scrollTop = 0;
        status = next.status;

        if(!next.status.toString().indexOf(projectstring)) createProject(next.status);
        else for(let i = 0; i < pages.length; i++){
            if(next.status === pages[i].status && pages[i].create) pages[i].create();
        }

        if(!pushstate) history.pushState({location: next.url}, null, next.url);

        next = {};
    }

    function unrender(func){
        if(transition) return;
        else if(!status){
            if(typeof func === "function") func();
            return;
        }

        transition = true;

        if(!status.toString().indexOf(projectstring)) destroyProject();
        else for(let i = 0; i < pages.length; i++){
            if(status === pages[i].status && pages[i].destroy) pages[i].destroy();
        }

        delay(function(){
            transition = false;
            status = null;
            if(typeof func === "function") func();
        }, transtime);
    }

    function changestatus(e){
        // e - string - the url that should be changed after the render finishes
        //   - object - should be changed when popstate called
        //   - false - should change by current url and dont trigger the pushstate

        navigated = true;

        let loc,
            search,
            hash,
            query = false,
            link,
            found = false;

        if(typeof e === "string"){
            link = createElement("a");
            link.href = e;
            loc = link.pathname;
            search = link.search;
            hash = link.hash;
        }
        else{
            loc = location.pathname;
            search = location.search;
            hash = location.hash;
        }

        if(search) query = getquery(search, "page");

        if(loc === "/" && query){
            if(!~query.indexOf("/")) query = "/" + query;

            changestatus(
                query + (search ? changequery(search, "page") : "") + (hash ? hash : "")
            );

            return;
        }
        else if(!loc.indexOf(projectpath) && loc.length > projectpath.length){
            let proj = loc.replace(projectpath, "");
            if(~projects.indexOf(proj) || ~projects.indexOf(proj + "/")){
                next.status = projectstring + proj;
                found = true;
            }
            else next.status = 404;
        }
        else for(let i = 0; i < pages.length; i++){
            if(pages[i].path && checkpath(loc, pages[i].path)){
                next.status = pages[i].status;
                found = true;
            }
        }

        if(!found) next.status = 404;

        next.url = loc + (search ? search : "") + (hash ? hash : "");

        let pushstate = e === false || (typeof e === "object" && e.type === "popstate") ? true : false;

        unrender(function(){
            render(pushstate, e);
        });
    }

    function canvasresize(){
        canvasheight = window.innerHeight;
        canvaswidth = window.innerWidth;
        canvas.width = canvaswidth;
        canvas.height = canvasheight;
    }

    function checklink(link){
        let rex = /#.*/;

        if(link.host === location.host && link.href.replace(rex, "") !== location.href.replace(rex, "") && link.protocol === location.protocol) return true;
        return false;
    }

    function linkhandler(e){
        let div,
            link = createElement("a");

        div = e.target;

        while(true){
            if(div.tagName.toLowerCase() === "a" && !div.target && checklink(div) && !link.getAttribute("data-ajax")) break;
            else if(div.getAttribute("data-href")){
                let targetdata = div.getAttribute("data-target");
                link.href = div.getAttribute("data-href");
                if(!targetdata && checklink(link)){
                    div = link;
                    break;
                }
                else{
                    if(targetdata) link.target = targetdata;
                    link.click();
                    return;
                }
            }
            else if(div === e.currentTarget) return;
            div = div.parentNode;
        }

        e.preventDefault();
        changestatus(div.href);
    }

    function dom(){
        createLoading();

        root = $("body>.root")[0];
        canvas = createElement("canvas");
        context = canvas.getContext("2d");

        canvasresize();

        root.appendChild(canvas);
        window.addEventListener("resize", canvasresize);

        root.addEventListener("click", linkhandler);
        /*window.addEventListener("contextmenu", (e) => {
            e.preventDefault()
        });*/
    }

    function load(){

        if("scrollRestoration" in history){
            history.scrollRestoration = "manual";
        }

        deleteLoading(function(){
            scrollingelement = document.scrollingElement || document.documentElement;
            scrollingframe = window;

            smoothscroll(scrollingelement, 70, 10);
            touchenable();

            if(!navigated) changestatus(false);
        });
    }

    function checkpagequery(){
        let url = location.pathname,
            query = location.search,
            hash = location.hash,
            state;

        if(query) state = getquery(query, "page");
        if(!query || !state || !checkpath(url, "")) return;

        let nexturl = state + (query ? changequery(query, "page") : "") + (hash ? hash : "");
        history.replaceState({location: nexturl}, null, nexturl);
    }

    checkpagequery();
    document.addEventListener("DOMContentLoaded", dom);
    window.addEventListener("load", load);
    window.addEventListener("popstate", changestatus);

//})();
