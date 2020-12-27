
let projects = [
    {
        name: "Mazzard",
        url: "http://github.com/thirdless/game",
        description: "Mini game-project for university with Java with 2 levels, in which a prince needs to regain his throne since the monsters have won the whole kingdom. (idk im not the best storywriter)",
        background: "url(/bg/bgmenu.png)"
    },
    {
        name: "YouTube Music Desktop App",
        url: "http://github.com/thirdless/YoutubeMusic",
        description: "Youtube Music webwrapper with search through playlist functionality, discord integration and more. Since google doesn't want any native desktop app ever.",
        background: "linear-gradient(to right, #ED213A, #93291E)"
    },
    {
        name: "Timify",
        url: "http://github.com/thirdless/timify",
        description: "Easy to use time management javascipt library. From countdowns, time-passed watches and stopwatches, everything is one line away.",
        background: "url(/bg/timify.jpg)"
    },
    {
        name: "Dusk",
        url: "http://host.smuwn.com",
        description: "Mini forum/blog project for university, includes profiles, formattable posts, comments and admin solutions.",
        background: "linear-gradient(to right, #8360c3, #2ebf91)"
    },
    {
        name: "smuwnware",
        url: "http://github.com/smuwn/smuwnware",
        description: "Small, fun OS, written in javascript for the browser.",
        background: "linear-gradient(to right, #ee0979, #ff6a00)"
    },
    {
        name: "Hoggins",
        description: "Customizable first-page, where you can include from reddit and google news posts, to weather widgets and daily themed wallpapers."
    }
];

let skillSet = {
    "HTML": "g", "CSS": "g", "JS/ES6": "g", "PHP": "g",
    "MySQL": "g", "Node.JS": "g", "Java": "g", "C/C++": "m",
    "OracleDB": "m", "Electron": "m", "Python": "m", "ASM x86/x64": "m",
    "Matlab": "b", "Joomla": "b", "Wordpress": "b"
};

let svgs = {
    "logo-big":{
        view: "0 0 104 32",
        path: '<path d="M6.85 31.905c-1.536-0.263-2.771-0.825-3.963-1.802-1.498-1.229-2.507-3.064-2.816-5.122-0.096-0.641-0.096-17.317 0-17.958 0.555-3.694 3.256-6.396 6.951-6.951 0.641-0.096 17.317-0.096 17.958 0 3.694 0.555 6.396 3.256 6.951 6.951 0.096 0.641 0.096 17.317 0 17.958-0.555 3.694-3.256 6.396-6.951 6.951-0.712 0.107-17.494 0.083-18.13-0.026zM9.756 26.299l0.171-0.134-0.018-3.689c-0.018-3.679-0.018-3.69-0.161-3.957-0.383-0.716-1.188-1.464-2.001-1.86-0.452-0.22-0.517-0.234-1.12-0.237-0.62-0.003-0.656 0.005-1.152 0.25-0.409 0.203-0.636 0.378-1.131 0.873-0.595 0.596-0.625 0.639-0.784 1.141l-0.165 0.522v6.893l0.394 0.331h2.898c2.846 0 2.901-0.002 3.069-0.134zM28.544 26.305c0.127-0.127 0.128-0.213 0.128-10.271s-0.001-10.144-0.128-10.271c-0.125-0.125-0.213-0.128-3.319-0.128-3.131 0-3.194 0.002-3.36 0.133l-0.169 0.133v20.202l0.394 0.331h3.163c3.077 0 3.166-0.004 3.291-0.128zM16.136 25.519c0.225-0.151 0.541-0.648 1.959-3.086 0.389-0.669 0.956-1.643 1.259-2.164s0.637-1.13 0.741-1.353c0.207-0.443 0.473-1.552 0.576-2.401 0.090-0.744 0.087-6.704-0.003-6.963-0.078-0.225-0.306-0.398-0.521-0.397-0.080 0.001-0.259 0.065-0.396 0.144-0.201 0.115-0.355 0.318-0.787 1.039-0.295 0.493-0.574 0.968-0.62 1.056-0.322 0.62-1.427 2.434-1.576 2.586-0.219 0.224-0.498 0.246-0.753 0.060-0.154-0.112-0.769-0.948-0.778-1.056-0.002-0.023-0.219-0.393-0.483-0.822s-0.48-0.79-0.48-0.803c0-0.013-0.223-0.383-0.496-0.824s-0.712-1.163-0.976-1.604c-1.671-2.794-1.69-2.821-2.228-3.086l-0.363-0.178-2.688-0.019c-2.94-0.021-3.12-0.004-3.393 0.321-0.328 0.39-0.258 0.547 1.637 3.666 0.235 0.387 0.439 0.733 0.452 0.77s0.214 0.382 0.447 0.768 0.892 1.494 1.466 2.462c2.087 3.521 3.292 5.55 3.704 6.239 0.231 0.387 0.466 0.79 0.522 0.896s0.277 0.48 0.491 0.832c0.214 0.352 0.765 1.273 1.223 2.048 1.148 1.941 1.494 2.253 2.066 1.87zM67.903 20.955c-0.839-0.225-1.424-0.785-1.799-1.721l-0.154-0.384-0.037-7.967h2.623l0.019 3.76c0.018 3.56 0.026 3.772 0.142 3.997 0.204 0.395 0.609 0.513 1.253 0.365 0.388-0.090 0.662-0.028 0.935 0.212 0.217 0.19 0.765 0.934 0.719 0.975-0.079 0.071-0.738 0.366-1.131 0.507-0.548 0.197-1.423 0.361-1.891 0.355-0.18-0.002-0.485-0.047-0.678-0.098zM41.951 20.952c-0.92-0.099-2.29-0.443-2.798-0.703l-0.174-0.089 0.296-0.847c0.163-0.466 0.302-0.856 0.31-0.866s0.342 0.080 0.743 0.201c1.285 0.388 2.537 0.467 3.010 0.191 0.304-0.177 0.501-0.499 0.501-0.815-0.001-0.575-0.422-0.894-2.241-1.7-1.204-0.533-1.967-1.183-2.24-1.907-0.182-0.482-0.154-1.333 0.061-1.89 0.281-0.727 1.092-1.388 2.052-1.674 0.814-0.242 2.284-0.187 3.51 0.132 0.333 0.086 0.628 0.172 0.657 0.189 0.038 0.023-0.47 1.624-0.552 1.741-0.007 0.010-0.254-0.041-0.55-0.112-0.693-0.167-1.727-0.233-2.092-0.134-0.151 0.041-0.367 0.158-0.48 0.259-0.18 0.16-0.205 0.224-0.205 0.504 0 0.561 0.38 0.889 1.76 1.519 1.123 0.513 1.634 0.826 2.097 1.284 0.682 0.675 0.905 1.438 0.69 2.357-0.242 1.034-0.986 1.798-2.127 2.184-0.407 0.138-0.639 0.173-1.237 0.186-0.405 0.009-0.851 0.005-0.992-0.011zM48.238 16.562c-0.023-3.605-0.044-4.331-0.135-4.848-0.059-0.334-0.123-0.658-0.142-0.72-0.032-0.104 0.049-0.112 1.091-0.112h1.126l0.206 0.293c0.113 0.161 0.264 0.427 0.335 0.592 0.124 0.288 0.129 0.459 0.146 4.667l0.018 4.368h-2.617zM54.334 17.059c0-3.304-0.012-3.773-0.104-4.002-0.16-0.399-0.339-0.462-1.169-0.41l-0.691 0.044-0.276-0.248c-0.368-0.331-0.8-0.993-0.688-1.055 0.045-0.025 0.426-0.165 0.848-0.31 1.846-0.637 2.992-0.577 3.842 0.201 0.409 0.374 0.749 1.014 0.858 1.616 0.044 0.243 0.069 1.736 0.069 4.144v3.764h-2.688zM60.463 17.041c-0.016-3.492-0.026-3.776-0.134-3.995-0.072-0.145-0.204-0.277-0.345-0.343-0.229-0.109-0.293-0.108-1.212 0.008-0.274 0.035-0.374 0.017-0.59-0.104-0.281-0.158-0.537-0.446-0.782-0.878-0.191-0.337-0.233-0.304 0.904-0.683 1.889-0.629 3.027-0.531 3.922 0.336 0.371 0.36 0.588 0.713 0.767 1.246 0.128 0.382 0.134 0.549 0.157 4.285l0.024 3.888h-2.694zM72.674 20.59c-0.281-0.369-0.476-0.887-0.546-1.451-0.040-0.325-0.067-2.085-0.067-4.4v-3.857h2.678l0.028 4.272c0.028 4.328 0.030 4.366 0.268 5.45l0.043 0.197h-2.243zM79.676 20.714c-0.691-0.188-1.407-0.755-1.713-1.356-0.362-0.711-0.357-0.644-0.384-4.845l-0.025-3.888h2.694l0.017 3.76c0.016 3.492 0.026 3.776 0.134 3.995 0.072 0.145 0.204 0.277 0.345 0.343 0.229 0.109 0.293 0.108 1.212-0.008 0.527-0.067 0.942 0.229 1.37 0.977 0.084 0.147 0.134 0.287 0.111 0.31s-0.407 0.17-0.854 0.325c-1.255 0.437-2.241 0.568-2.91 0.386zM85.629 20.699c-0.95-0.255-1.649-1.074-1.851-2.166-0.046-0.246-0.070-1.694-0.070-4.142v-3.764h2.688v3.742c0 3.304 0.012 3.773 0.104 4.002 0.16 0.399 0.339 0.462 1.169 0.41l0.691-0.044 0.276 0.248c0.368 0.331 0.8 0.993 0.688 1.055-0.251 0.141-1.688 0.586-2.15 0.667-0.666 0.116-1.090 0.114-1.545-0.008zM95.271 16.465c-0.027-4.354-0.047-4.755-0.271-5.463-0.037-0.115 0.013-0.121 1.080-0.121h1.119l0.199 0.251c0.27 0.341 0.431 0.726 0.512 1.221 0.042 0.259 0.068 1.926 0.068 4.431l0.001 4.016h-2.68l-0.027-4.336zM101.484 17.009c-0.017-3.483-0.028-3.809-0.131-3.999-0.178-0.325-0.439-0.427-0.939-0.366-0.756 0.092-0.924 0.075-1.18-0.121-0.129-0.099-0.365-0.371-0.523-0.607l-0.288-0.427 0.434-0.204c1.095-0.514 2.241-0.744 3.033-0.608 1.075 0.184 1.845 0.92 2.137 2.040 0.079 0.305 0.095 1.011 0.095 4.225v3.858h-2.619zM90.346 20.252c-0.113-0.161-0.264-0.427-0.335-0.592-0.124-0.288-0.129-0.459-0.146-4.667l-0.018-4.368h2.617l0.028 4.24c0.023 3.605 0.044 4.331 0.135 4.848 0.059 0.334 0.123 0.658 0.142 0.72 0.032 0.104-0.049 0.112-1.091 0.112h-1.126z"></path>'
    },
    "music":{
        view: "0 0 24 24",
        path: '<path d="M8 18c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM22 16v-13c0-0.050-0.004-0.107-0.014-0.164-0.091-0.545-0.606-0.913-1.151-0.822l-12 2c-0.476 0.081-0.835 0.492-0.835 0.986v9.535c-0.588-0.34-1.272-0.535-2-0.535-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828v-12.153l10-1.667v8.355c-0.588-0.34-1.272-0.535-2-0.535-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM20 16c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path>'
    },
    "envelope":{ 
        view: "0 0 28 28",
        path: '<path d="M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z"></path>'
    },
    "location":{
        view: "0 0 24 24",
        path: '<path d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0s-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zM12 13.499c-0.668 0-1.295-0.26-1.768-0.732-0.975-0.975-0.975-2.561 0-3.536 0.472-0.472 1.1-0.732 1.768-0.732s1.296 0.26 1.768 0.732c0.975 0.975 0.975 2.562 0 3.536-0.472 0.472-1.1 0.732-1.768 0.732z"></path>'
    },
    "clip":{
        view: "0 0 32 32",
        path: '<path d="M20.807 10.22l-2.030-2.029-10.15 10.148c-1.682 1.681-1.682 4.408 0 6.089s4.408 1.681 6.090 0l12.18-12.178c2.804-2.802 2.804-7.346 0-10.148-2.802-2.803-7.347-2.803-10.149 0l-12.788 12.787c-0.009 0.009-0.019 0.018-0.027 0.026-3.909 3.909-3.909 10.245 0 14.153 3.908 3.908 10.246 3.908 14.156 0 0.009-0.009 0.016-0.018 0.026-0.027l0.001 0.001 8.729-8.728-2.031-2.029-8.729 8.727c-0.009 0.008-0.018 0.018-0.026 0.026-2.784 2.783-7.312 2.783-10.096 0-2.783-2.783-2.783-7.31 0-10.093 0.010-0.009 0.019-0.018 0.028-0.026l-0.001-0.002 12.79-12.786c1.678-1.679 4.411-1.679 6.090 0s1.678 4.411 0 6.089l-12.18 12.178c-0.56 0.56-1.47 0.56-2.030 0-0.559-0.559-0.559-1.47 0-2.029l10.15-10.149z"></path>'
    },
    "github":{
        view: "0 0 32 32",
        path: '<path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>'
    },
    "spotify":{
        view: "0 0 32 32",
        path: '<path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"></path>'
    },
    "steam":{
        view: "0 0 32 32",
        path: '<path d="M15.972 0c-8.401 0-15.291 6.48-15.943 14.716l8.576 3.544c0.727-0.495 1.604-0.787 2.549-0.787 0.084 0 0.167 0.005 0.251 0.008l3.815-5.523v-0.079c0-3.327 2.704-6.032 6.032-6.032 3.325 0 6.032 2.708 6.032 6.036s-2.707 6.033-6.032 6.033h-0.14l-5.435 3.881c0 0.069 0.005 0.14 0.005 0.212 0 2.5-2.020 4.528-4.52 4.528-2.18 0-4.021-1.564-4.441-3.636l-6.14-2.543c1.901 6.716 8.067 11.64 15.391 11.64 8.836 0 15.999-7.164 15.999-16s-7.164-16-15.999-16zM10.053 24.28l-1.964-0.813c0.349 0.724 0.952 1.332 1.752 1.667 1.729 0.719 3.724-0.101 4.443-1.833 0.351-0.84 0.352-1.759 0.007-2.599s-1-1.495-1.836-1.844c-0.832-0.347-1.72-0.332-2.504-0.040l2.031 0.84c1.275 0.533 1.879 2 1.345 3.273-0.529 1.276-1.996 1.88-3.272 1.349zM25.273 11.876c0-2.216-1.804-4.020-4.020-4.020-2.22 0-4.020 1.804-4.020 4.020 0 2.22 1.8 4.020 4.020 4.020 2.217 0 4.020-1.8 4.020-4.020zM18.243 11.869c0-1.669 1.351-3.021 3.020-3.021 1.665 0 3.021 1.352 3.021 3.021 0 1.668-1.356 3.020-3.021 3.020-1.671 0-3.020-1.352-3.020-3.020z"></path>'
    },
    "arrow-up":{
        view: "0 0 24 24",
        path: '<path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM13 16v-5.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.096-0.096-0.206-0.168-0.324-0.217-0.122-0.051-0.253-0.076-0.383-0.076-0.256 0-0.512 0.098-0.707 0.293l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293v5.586c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path>'
    },
    "arrow-right":{
        view: "0 0 32 32",
        path: '<path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>'
    },
};

let vFrameDuration;

function getFrameRate(e){
    if(typeof e === "number") vFrameDuration.push(e);
    else vFrameDuration = [];

    if(vFrameDuration.length != 2) requestAnimationFrame(getFrameRate);
    else{
        vFrameDuration = vFrameDuration[1] - vFrameDuration[0];
        console.log("Initial time between frames:", vFrameDuration);
    }
}

function timeout(func, duration){
    if(duration == null) duration = vFrameDuration;

    return setTimeout(func, duration);
}

function random(a, b){
    return Math.random() * (b - a) + a;
}

function bezier(p1x, p1y, p2x, p2y){
    let abs = Math.abs,
        cx = 3.0 * p1x,
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
            epsilon = 0.0000125;

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
            t2 = (t1 - t0) * 0.5 + t0;
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
    ease: bezier(0.25, 0.1, 0.25, 1),
    custom: bezier(0.4, 0.3, 0.2, 1)
};

function createElement(type = "div", parent, className){
    let div = document.createElement(type);

    if(parent instanceof Node) parent.appendChild(div);
    if(className != null) div.className = className;
    
    return div;
}

function svg(id, asElement){
    let div = createElement("svg");

    if(id in svgs){
        div.setAttribute("viewBox", svgs[id].view);
        div.innerHTML = svgs[id].path;
    }

    if(asElement) return div;
    else return div.outerHTML;
}

function redrawDOM(el){
    if(!el) el = vRoot;
    void el.offsetWidth;
    void el.getBoundingClientRect();
}

let vScrollingFunctionActive = false;

function smoothScrollTo(yPos, duration = 1000, callback){
    if(vScrollingFunctionActive) return;
    if(typeof yPos !== "number") yPos = 0;

    vScrollingFunctionActive = true;

    let startTime = performance.now(),
        startPos = vScrollingElement.scrollTop,
        distance = yPos - startPos;

    function scrolling(){
        let now = performance.now(),
            time = Math.min(1, (now - startTime) / duration),
            func = easing.custom(time);
        
        vScrollingElement.scrollTop = startPos + distance * func;

        if(Math.abs(vScrollingElement.scrollTop - yPos) < 1){
            vScrollingFunctionActive = false;
            timeout(function(){
                if(typeof callback === "function") callback();
            });
            return;
        }
        //else console.log(Math.abs(vScrollingElement.scrollTop - yPos), time, startPos, yPos);

        requestAnimationFrame(scrolling);
    }

    scrolling();
}

function smoothCenterOnElement(element, callback){
    let bounding = element.getBoundingClientRect(),
        pos = vScrollingElement.scrollTop + bounding.top - (window.innerHeight - bounding.height) / 2;

    smoothScrollTo(pos, undefined, callback);
}

function smoothWheel(e){
    if(vScrollingFunctionActive) e.preventDefault();
}

function createGenericSocial(name, link, className){
    let el = createElement("a");
    el.href = link;
    el.className = "generic-social";
    el.innerHTML = svg(name);

    if(className != null) el.className += " " + className;

    return el.outerHTML;
}

function createGenericLink(text, link, className){
    let el = createElement("a");
    el.href = link;
    el.className = "generic-link";
    el.innerHTML = text;

    if(className != null) el.className += " " + className;

    return el.outerHTML;
}


function headerCreate(page, parent){
    let element = createElement("div", parent, "header"),
        link;

    if(page == "home") link = createGenericLink("Projects", "/projects");
    else link = createGenericLink("About", "/");

    let content = `
        <div class="logo">${svg("logo-big")}</div>
        <div class="menu">
            <div class="sound">
                ${svg("music")}
            </div>
            ${link}
        </div>
    `;

    element.innerHTML = content;
    return element;
}

function getSocials(){
    return `
        ${createGenericSocial("github", "https://github.com/thirdless")}
        ${createGenericSocial("spotify", "http://open.spotify.com/user/smuwn")}
        ${createGenericSocial("steam", "http://steamcommunity.com/id/smuwn")}
    `;
}

let vFooterTop;

function footerCreate(parent){
    let element = createElement("div", parent, "footer"),
        content = `
            <div class="content">
                <div class="left">
                    <div class="logo">${svg("logo-big")}</div>
                    <div class="info">
                        <p>Ioan Macovei</p>
                        <p>Made with ♡ in Romania in MMXX</p>
                    </div>
                </div>
                <div class="right">
                    <p>Follow me</p>
                    ${getSocials()}
                    <h3 class="generic-link">${svg("arrow-up")} Back to top</h3>
                </div>
                <span>This site stores no cookies except the Github Pages ones or the PHP Session mandatory ones which I cannot control.</span>
            </div>
    `;

    element.innerHTML = content;

    vFooterTop = element.querySelector("h3");
    vFooterTop.addEventListener("click", smoothScrollTo);

    return element;
}

let blurElement;

function createBlurSVG(){
    let namespace = "http://www.w3.org/2000/svg",
        create = type => document.createElementNS(namespace, type),
        svg = create("svg"),
        defs = create("defs"),
        filter = create("filter"),
        blur = create("feGaussianBlur");


    svg.appendChild(defs);
    defs.appendChild(filter);
    filter.appendChild(blur);

    filter.setAttribute("id", "motionBlur");
    blur.setAttribute("in", "SourceGraphic");
    blur.setAttribute("stdDeviation", "0,0");

    blurElement = blur;
    vRoot.appendChild(svg);
}

function setBlurAmount(value){
    blurElement.setAttribute("stdDeviation", "0," + value);
}

let vRoot,
    vScrollingElement,
    vHomeActive = false,
    vProjectsActive = false;

function movingElements(){
    let scroll = vScrollingElement.scrollTop;

    gaussianMovement(scroll);
    blurElements(scroll);

    if(vHomeActive) vHomeScrolled = scroll;
}

let vBlurLastScroll = 0,
    vBlurTimeout = 0;

function blurElements(scroll){
    let MULTIPLIER = 1,
        value = Math.abs((vBlurLastScroll - scroll) * MULTIPLIER);

    setBlurAmount(value);

    clearTimeout(vBlurTimeout);
    vBlurTimeout = timeout(function(){
        setBlurAmount(0);
    });

    vBlurLastScroll = scroll;
}

let vGaussianMovement = [];

function gaussianMovement(scroll){
    let elementPos,
        screen = window.innerHeight,
        range = 0.3 * screen,
        current;

    for(let i = 0; i < vGaussianMovement.length; i++){
        current = vGaussianMovement[i];

        //elementPos = Math.max(Math.min(linearMap(current.top - scroll, screen, -current.height, range, -range), range), -range);
        elementPos = scroll - current.top + (screen - current.height) / 2;
        elementPos *= -.3;

        current.element.style.transform = "translate(0px, " + elementPos + "px)";
    }
}

function addMovingElements(type, elements){
    if(elements instanceof Node) elements = [elements];

    for(let i = 0; i < elements.length; i++){
        if(type == "gauss"){
            vGaussianMovement.push({
                element: elements[i],
                top: elements[i].getBoundingClientRect().top,
                height: elements[i].offsetHeight
            });
        }
        else if(type == "blur"){
            elements[i].style.filter = "url(#motionBlur)";
        }
    }

    if(type == "gauss"){
        gaussianMovement(vScrollingElement.scrollTop);
    }
}

function clearMovingElements(){
    //TO DO mutiple choices except blur cuz css clears anyway when reset
    vGaussianMovement = [];
}

let CIRCLES_DENSITY = 25,
    CIRCLES_SIZE_FACTOR = 250,
    CIRCLES_MOVEMENT_FACTOR = 10,
    CIRCLES_COLORS = [
        {r: 229, g: 57, b: 53},
        {r: 48, g: 63, b: 159},
        {r: 0, g: 121, b: 107},
        {r: 85, g: 139, b: 47},
        {r: 69, g: 39, b: 160}
    ];

let vHomeCanvas,
    vHomeContext,
    vHomeCircles,
    vHomeScrolled = 0,
    vCirclesFactor,
    vCirclesUsedIndexes;

function homeResize(){
    vHomeCanvas.width = window.innerWidth;
    vHomeCanvas.height = window.innerHeight;
}

function homeCircleCreate(){
    let circle = {},
        medianW = vHomeCanvas.width / CIRCLES_DENSITY,
        medianH = vRoot.offsetHeight / CIRCLES_DENSITY,
        widthIndex = vHomeCircles.length,
        heightIndex;

    while(true){
        heightIndex = random(0, CIRCLES_DENSITY);

        if(!~vCirclesUsedIndexes.indexOf(heightIndex)){
            vCirclesUsedIndexes.push(heightIndex);
            break;
        }
    }

    circle.color = CIRCLES_COLORS[Math.floor(random(0, CIRCLES_COLORS.length))];
    circle.size = random(vCirclesFactor / 2, vCirclesFactor);
    circle.transparency = random(0.1, 0.3);

    circle.last = { x: 0, y: 0 };
    circle.position = {};
    circle.position.x = random(medianW * widthIndex, medianW * (widthIndex + 1));
    circle.position.y = random(medianH * heightIndex, medianH * (heightIndex + 1));

    vHomeCircles.push(circle);
}

function homeCanvasRender(){
    let circle,
        context = vHomeContext;

    context.clearRect(0, 0, vHomeCanvas.width, vHomeCanvas.height);

    for(let i in vHomeCircles){
        circle = vHomeCircles[i];

        let posX = circle.position.x,
            posY = circle.position.y - vHomeScrolled;

        circle.last.x += (posX - circle.last.x) / CIRCLES_MOVEMENT_FACTOR;
        circle.last.y += (posY - circle.last.y) / CIRCLES_MOVEMENT_FACTOR;

        context.beginPath();
        context.arc(circle.last.x, circle.last.y, circle.size, 0, 2 * Math.PI);
        context.fillStyle = "rgba(" + circle.color.r + ", " + circle.color.g + ", " + circle.color.b + ", " + circle.transparency + ")";
        context.fill();
    }

    if(vHomeActive) requestAnimationFrame(homeCanvasRender);
}

//TO DO
/*function homeCanvasScroll(){
    vHomeScrolled = vScrollingElement.scrollTop;
}*/

function homeCanvasCreate(canvas){
    //element and listeners
    vHomeCanvas = canvas;
    vHomeContext = canvas.getContext("2d");

    homeResize();
    window.addEventListener("resize", homeResize);

    //create circles
    vCirclesFactor = (vHomeCanvas.width / 1080) * CIRCLES_SIZE_FACTOR;
    vHomeCircles = [];
    vCirclesUsedIndexes = [];
    for(let i = 0; i < CIRCLES_DENSITY; i++) homeCircleCreate();

    homeCanvasRender();
}

function homeLoad(){
    vHomeActive = true;

    let parent = createElement("div", null, "home"),
        canvas = createElement("canvas", parent),
        header = headerCreate("home", parent),
        main = createElement("div", parent, "main"),
        about = createElement("div", parent, "about"),
        skills = createElement("div", parent, "skills"),
        footer = footerCreate(parent);

    //about disivion elements
    let age = (new Date().getFullYear()) - 2000;

    about.innerText = `\
        Hi there, I'm Ioan, a ${age} year old "Automatic Control and\
        Computer Engineering" student from Romania. Mostly\
        focusing on front-end developing, but also on back-end,\
        software, servers, networking and occasionally working on\
        some small open-source libraries and other "for-fun"\
        projects. Sometimes I like to be competitive and that pretty much\
        summaries my taste of activities. Tending to listen to music\
        everytime I do something, I don't have a preffered genre, but\
        most of my favorites are rock and electronic - EDM, House,\
        whatever. Worth mentioning I've also played tennis in the\
        past, and now trying to learn to play the guitar and speak\
        russian, even though these are not so relevant.\
    `;

    //main division elements
    let title = createElement("div", main, "title"),
        desc = createElement("div", main, "desc"),
        photo = createElement("div", main, "photo"),
        text = createElement("div", desc, "text");

    text.innerText = `\
        ... a student living in Romania. Mostly doing programming,\
        listening to music, sport and whatnot; messing with\
        different aspects of programming and design, working with\
        efficiency and minimalism in mind.\
    `;

    desc.innerHTML += createGenericLink(svg("envelope") + " me@smuwn.com", "mailto:me@smuwn.com", "line");
    createElement("div", desc, "line").innerHTML = svg("location") + " Iași, România";
    desc.innerHTML += createGenericLink(svg("clip") + " Résumé", "/cv.pdf", "line");

    let socials = createElement("div", desc, "socials");
    createElement("div", socials).innerHTML = "Socials";
    socials.innerHTML += getSocials();

    photo.innerHTML = '<img src="/assets/main.jpg">';
    title.innerText = "Hi, I'm Ioan";

    //skills division elements
    createElement("h1", skills).innerText = "Some of the stuff I've been working with";
    let skillsList = createElement("div", skills);

    for(let key in skillSet){
        let element = createElement("span", skillsList, skillSet[key]);
        element.innerText = key;
    }

    skillsList.innerHTML += `
        <div class="spectrum"></div>
        <p>^ The "the farthest, the more-suckness" spectrum.</p>
    `;

    //show page
    vRoot.appendChild(parent);

    //after everything was rendered
    timeout(function(){
        //create canvas
        homeCanvasCreate(canvas);

        //moving elements
        addMovingElements("gauss", [photo]);
        addMovingElements("blur", [main, about, skills]);
    });
}

function homeUnload(){

}

let vProjectParent,
    vProjectContainer,
    vProjectSelected = null,
    vProjectBackgroundsArray,
    vProjectBackgrounds,
    vProjectsArray;

function projectCloseSelected(e){
    //TO DO
    console.log(e);
    if(!e || vProjectSelected != null){
        window.removeEventListener("scroll", projectCloseSelected);
        vProjectBackgrounds.classList.remove("show");
        vProjectSelected.classList.remove("selected");
        vProjectParent.classList.remove("selected");
        vProjectSelected = null;
    }
}

function projectHandler(e){
    let target = e.target,
        parent = e.currentTarget;

    if(target.tagName == "A") return;

    if(vProjectSelected != null){
        projectCloseSelected(null);
        return;
    }

    while(true){
        if(target == parent) return;
        else if(target.tagName == "DIV" && target.classList.contains("project") && target.parentNode == vProjectContainer) break;

        target = target.parentNode;
    }

    let background = vProjectBackgroundsArray[vProjectsArray.indexOf(target)];
    if(background.style.backgroundImage) vProjectBackgrounds.style.backgroundImage = background.style.backgroundImage;
    else vProjectBackgrounds.style.backgroundImage = "";

    target.classList.add("selected");
    vProjectParent.classList.add("selected");
    vProjectSelected = target;

    redrawDOM();
    vProjectBackgrounds.classList.add("show");

    window.removeEventListener("scroll", projectCloseSelected);
    smoothCenterOnElement(target, () => {
        window.addEventListener("scroll", projectCloseSelected);
    });
    
}

function projectsLoad(){
    let parent = createElement("div", null, "projects"),
        backgrounds = createElement("div", parent, "project-background"),
        header = headerCreate("projects", parent),
        container = createElement("div", parent, "container"),
        footer = footerCreate(parent);

    //container division elements
    let title = createElement("div", container, "title");
    title.innerText = "Projects";

    vProjectBackgroundsArray = [];
    vProjectsArray = [];

    for(let i = 0; i < projects.length; i++){
        let el = createElement("div", container, "project");
        el.innerText = projects[i].name;
        let span = createElement("span", el);
        span.innerText = projects[i].name;
        //createElement("span", el).innerText = projects[i].name;
        if(projects[i].background) span.style.backgroundImage = projects[i].background;
        if(projects[i].url) el.innerHTML += createGenericLink("See the project page " + svg("arrow-right"), projects[i].url, "link");
        if(projects[i].description) createElement("div", el, "description").innerText = projects[i].description;

        let background = createElement("div");
        if(projects[i].background) background.style.backgroundImage = projects[i].background;
        vProjectsArray.push(el);
        vProjectBackgroundsArray.push(background);
    }

    vProjectBackgrounds = backgrounds;
    vProjectParent = parent;
    vProjectContainer = container;
    vRoot.addEventListener("click", projectHandler);
    
    //ready
    vRoot.appendChild(parent);

    timeout(function(){
        addMovingElements("blur", vProjectsArray);
    });
}

function projectsUnload(){

}

function utilChangeState(e){

}

function utilDom(){
    vRoot = document.querySelector(".root");
    vScrollingElement = document.scrollingElement || document.documentElement;
    vRoot.addEventListener("wheel", smoothWheel);
    getFrameRate();
    createBlurSVG();

    //TODO
    if(~location.href.indexOf("projects")) projectsLoad();
    else homeLoad();

    window.addEventListener("scroll", movingElements, {passive: true});
}

function utilLoad(){
    if("scrollRestoration" in history){
        history.scrollRestoration = "manual";
    }
 
}

window.addEventListener("load", utilLoad);
document.addEventListener("DOMContentLoaded", utilDom);
window.addEventListener("popstate", utilChangeState);
