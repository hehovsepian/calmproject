(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(8),l=c.n(a),i=c(7),r=c(10),j=c(2),d=c(6),u=(c(14),c(0));var o=function(e){var t=Object(n.useRef)(null),c=Object(n.useRef)(null);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault();var s={username:t.current.value,password:c.current.value};e.login(s)},className:"login-form",children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{required:!0,type:"text",ref:t}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{required:!0,type:"password",ref:c}),Object(u.jsx)("button",{type:"submit",children:"Log in"})]}),Object(u.jsxs)("p",{children:["Don't have an account? ",Object(u.jsx)("button",{className:"link",onClick:e.handleSwitchForms,children:"Sign up"})]})]})};var b=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),s=c[0],a=c[1],l=Object(n.useRef)(null),i=Object(n.useRef)(null),r=Object(n.useRef)(null),d=Object(n.useRef)(null);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:s}),Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),r.current.value!==d.current.value)a("Passwords don't match");else if(!1===/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(l.current.value))a("Please enter a valid email");else{var c={email:l.current.value,username:i.current.value,password:r.current.value};e.signup(c)}},className:"signup-form",children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{required:!0,type:"email",ref:l}),Object(u.jsx)("label",{children:"Create a Username"}),Object(u.jsx)("input",{required:!0,type:"text",ref:i}),Object(u.jsx)("label",{children:"Create a Password"}),Object(u.jsx)("input",{required:!0,type:"password",ref:r}),Object(u.jsx)("label",{children:"Retype Password"}),Object(u.jsx)("input",{required:!0,type:"password",ref:d}),Object(u.jsx)("button",{type:"submit",children:"Sign up"})]}),Object(u.jsxs)("p",{children:["Already have an account? ",Object(u.jsx)("button",{className:"link",onClick:e.handleSwitchForms,children:"Log in"})]})]})};var h=function(e){return Object(u.jsx)("div",{className:"toast",children:Object(u.jsx)("p",{children:e.message})})};var O=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(!1),i=Object(j.a)(l,2),r=i[0],d=i[1],O=Object(n.useState)(null),x=Object(j.a)(O,2),p=x[0],f=x[1],v=(Object(n.useRef)(null),Object(n.useRef)(null),Object(n.useRef)(null),Object(n.useRef)(null),function(){d(!r),a(null)});return Object(u.jsxs)("div",{className:"login",children:[null!=p?Object(u.jsx)(h,{message:p}):null,Object(u.jsx)("svg",{className:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 102 40",children:Object(u.jsx)("path",{d:"M6.502 9.19a30.605 30.605 0 0 0-3.921 6.42C1.523 17.954.726 20.47.304 23.083-1.72 37.425 6.961 39.706 8.441 39.985c7.609.891 13.212-3.272 15.86-5.826.956 4.787 5.716 4.845 7.803 2.683.533-.551.959-1.229 1.29-1.934 1.238 4.524 5.203 2.983 5.67 2.783 2.21-.833 4.52-3.927 6.154-6.522 1.039 3.558 3.043 7.372 6.893 6.963 2.32-.056 8.138-6.273 8.676-5.462.537.671.68 1.903.644 3.742-.035 1.839 1.417 1.931 2.075 1.749 1.016-.283 1.655-2.297 2.72-4.048.834-1.372 1.455-2.15 2.283-3.063.417-.452 2.306-2.417 3.638-1.75 1.332.668 1.468 2.039 1.56 2.797.103.76.104 1.567.136 2.45-.04 3.045 1.384 3.475 1.785 3.587 3.292.894 3.496-5.329 5.911-7.639.226-.235 2.336-2.425 3.541 1.148 1.74 6.459 7.097 8.873 14.307 5.282 1.337-.666 1.6-.927 2.33-1.473a.708.708 0 0 0 .283-.562v-.01a.7.7 0 0 0-1.043-.612l-.003.002c-.738.411-3.193 1.235-3.97 1.516-2.91.478-6.473.37-8.228-3.903-.529-1.288-1.053-2.448-1.957-3.667-1.022-1.379-4.37-3.018-7.498-.06-.812.748-1.411 1.576-1.931 2.401-.212.338-.408.677-.594 1.017l-.036-.135c-.276-.957-1.16-4.495-4.835-5.07-.505-.042-2.55-.273-5.38 2.848-.989 1.082-1.811 2.234-2.579 3.4l-.002.004c-.135-.634-.298-1.21-.46-1.463-2.405-3.72-6.046-.75-7.614.358-3.515 2.485-5.144 5.824-7.286-1.762a31.855 31.855 0 0 1-.665-3.26c2.135-3.647 6.48-14.743 3.986-22.182-.162-.47-1.03-2.872-3.118-2.717-.3.03-2.679-.221-3.978 6.461-1.217 6.46-.948 14.787-.653 17.548.033.286.095.851.206 1.59-2.057 3.54-4.76 7.566-6.406 7.754-2.14.243-1.543-1.74-2.849-6.144-.225-.57-.946-3.293-4.192-3.158-1.587.066-3.268.482-5.563 3.006C21.626 32.75 13.128 38.914 7.05 35.04c-.66-.515-3.945-3.214-2.735-11.303a26.182 26.182 0 0 1 1.95-6.452 28.55 28.55 0 0 1 3.338-5.653c6.244-7.711 11.653-8.612 12.72-8.566 2.737.001 3.448 3.563 3.446 3.53.06.626.614 1.084 1.236 1.023a1.136 1.136 0 0 0 1.017-1.243c-.005-.031.005-1.164-.463-2.24-.429-1.402-1.663-2.704-2.381-3.185-.886-.62-2.06-.95-3.442-.951-3.972 0-9.67 2.733-15.234 9.19m40.912 11.254c-.029-12.559 1.559-15.41 1.676-15.19.605 1.128 1.91 8.2-1.65 15.93-.01-.247-.018-.493-.026-.74M26.82 32.784c.046-3.323 4.162-5.412 5.267-3.1.09.19.152.403.21.614-.19.611-.268 1.597-.915 2.935-.682 1.413-1.755 2.114-2.689 2.114-1.033 0-1.896-.859-1.873-2.563",fillRule:"evenodd",fill:"white"})}),Object(u.jsx)("h1",{children:"Find Your Calm"}),Object(u.jsx)("p",{children:s}),!0===r?Object(u.jsx)(b,{handleSwitchForms:v,signup:function(e){fetch("/signup",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){"error"===e.status?a(e.message):(v(),f(e.message),setTimeout((function(){f(null)}),3e3))}))}}):Object(u.jsx)(o,{handleSwitchForms:v,login:function(t){fetch("/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return a(e.message)})).then(e.checkLoggedIn)}})]})},x=c(3);var p=Object(d.b)((function(e){return{scene:e.scene}}))((function(e){var t=Object(n.useRef)(null);return Object(u.jsxs)("div",{className:"navigation",ref:t,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("svg",{className:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 102 40",children:Object(u.jsx)("path",{d:"M6.502 9.19a30.605 30.605 0 0 0-3.921 6.42C1.523 17.954.726 20.47.304 23.083-1.72 37.425 6.961 39.706 8.441 39.985c7.609.891 13.212-3.272 15.86-5.826.956 4.787 5.716 4.845 7.803 2.683.533-.551.959-1.229 1.29-1.934 1.238 4.524 5.203 2.983 5.67 2.783 2.21-.833 4.52-3.927 6.154-6.522 1.039 3.558 3.043 7.372 6.893 6.963 2.32-.056 8.138-6.273 8.676-5.462.537.671.68 1.903.644 3.742-.035 1.839 1.417 1.931 2.075 1.749 1.016-.283 1.655-2.297 2.72-4.048.834-1.372 1.455-2.15 2.283-3.063.417-.452 2.306-2.417 3.638-1.75 1.332.668 1.468 2.039 1.56 2.797.103.76.104 1.567.136 2.45-.04 3.045 1.384 3.475 1.785 3.587 3.292.894 3.496-5.329 5.911-7.639.226-.235 2.336-2.425 3.541 1.148 1.74 6.459 7.097 8.873 14.307 5.282 1.337-.666 1.6-.927 2.33-1.473a.708.708 0 0 0 .283-.562v-.01a.7.7 0 0 0-1.043-.612l-.003.002c-.738.411-3.193 1.235-3.97 1.516-2.91.478-6.473.37-8.228-3.903-.529-1.288-1.053-2.448-1.957-3.667-1.022-1.379-4.37-3.018-7.498-.06-.812.748-1.411 1.576-1.931 2.401-.212.338-.408.677-.594 1.017l-.036-.135c-.276-.957-1.16-4.495-4.835-5.07-.505-.042-2.55-.273-5.38 2.848-.989 1.082-1.811 2.234-2.579 3.4l-.002.004c-.135-.634-.298-1.21-.46-1.463-2.405-3.72-6.046-.75-7.614.358-3.515 2.485-5.144 5.824-7.286-1.762a31.855 31.855 0 0 1-.665-3.26c2.135-3.647 6.48-14.743 3.986-22.182-.162-.47-1.03-2.872-3.118-2.717-.3.03-2.679-.221-3.978 6.461-1.217 6.46-.948 14.787-.653 17.548.033.286.095.851.206 1.59-2.057 3.54-4.76 7.566-6.406 7.754-2.14.243-1.543-1.74-2.849-6.144-.225-.57-.946-3.293-4.192-3.158-1.587.066-3.268.482-5.563 3.006C21.626 32.75 13.128 38.914 7.05 35.04c-.66-.515-3.945-3.214-2.735-11.303a26.182 26.182 0 0 1 1.95-6.452 28.55 28.55 0 0 1 3.338-5.653c6.244-7.711 11.653-8.612 12.72-8.566 2.737.001 3.448 3.563 3.446 3.53.06.626.614 1.084 1.236 1.023a1.136 1.136 0 0 0 1.017-1.243c-.005-.031.005-1.164-.463-2.24-.429-1.402-1.663-2.704-2.381-3.185-.886-.62-2.06-.95-3.442-.951-3.972 0-9.67 2.733-15.234 9.19m40.912 11.254c-.029-12.559 1.559-15.41 1.676-15.19.605 1.128 1.91 8.2-1.65 15.93-.01-.247-.018-.493-.026-.74M26.82 32.784c.046-3.323 4.162-5.412 5.267-3.1.09.19.152.403.21.614-.19.611-.268 1.597-.915 2.935-.682 1.413-1.755 2.114-2.689 2.114-1.033 0-1.896-.859-1.873-2.563",fillRule:"evenodd",fill:"white"})}),Object(u.jsx)("button",{className:"menu-btn",onClick:function(){window.innerWidth<768&&(t.current.classList.contains("show-navigation")?t.current.classList.remove("show-navigation"):t.current.classList.add("show-navigation"))},children:Object(u.jsxs)("svg",{viewBox:"0 0 100 100",children:[Object(u.jsx)("line",{fill:"white",x1:"0",y1:"25",x2:"100",y2:"25"}),Object(u.jsx)("line",{fill:"white",x1:"0",y1:"50",x2:"100",y2:"50"}),Object(u.jsx)("line",{fill:"white",x1:"0",y1:"75",x2:"100",y2:"75"})]})})]}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsxs)(i.b,{to:"/",activeclassname:"active",children:[Object(u.jsx)("div",{children:Object(u.jsx)("svg",{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M55.166 59.96c3.063 0 5.554 2.313 5.554 5.153v17.236c0 .625.71 1.152 1.551 1.152h12.554c.842 0 1.554-.527 1.554-1.152V47.895c0-2.841 2.49-5.152 5.553-5.152.882 0 1.364-.473 1.509-.878.137-.381.017-.73-.358-1.04L49.278 12.914c-.671-.555-1.894-.554-2.566 0l-33.795 27.91c-.375.31-.495.66-.359 1.04.146.406.628.879 1.507.879 3.062 0 5.553 2.31 5.553 5.152v34.454c0 .625.712 1.152 1.553 1.152H33.73c.842 0 1.553-.527 1.553-1.152V65.113c0-2.84 2.49-5.152 5.553-5.152h14.33zm7.105 27.54c-3.06 0-5.551-2.31-5.551-5.151V65.113c0-.625-.712-1.152-1.554-1.152h-14.33c-.842 0-1.554.527-1.554 1.152v17.236c0 2.84-2.49 5.152-5.552 5.152H21.17c-3.061 0-5.553-2.311-5.553-5.152V47.895c0-.624-.71-1.152-1.553-1.152-2.432 0-4.5-1.384-5.27-3.525-.714-1.986-.11-4.085 1.576-5.477L44.167 9.83c2.147-1.774 5.512-1.773 7.658 0l33.804 27.91c1.685 1.393 2.29 3.492 1.576 5.478-.77 2.14-2.838 3.525-5.27 3.525-.845 0-1.557.528-1.557 1.152v34.454c0 2.84-2.49 5.152-5.553 5.152H62.27z",fillRule:"evenodd",fill:"white"})})}),Object(u.jsx)("span",{children:"Featured"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)(i.b,{to:"/sleep",activeclassname:"active",children:[Object(u.jsx)("div",{children:Object(u.jsx)("svg",{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M16.633 64.366c6.016 11.66 18.227 19.252 31.533 19.252 19.55 0 35.452-15.904 35.452-35.453 0-13.82-8.005-26.24-20.285-32.044a39.2 39.2 0 0 1 1.253 9.866c0 21.69-17.645 39.335-39.334 39.335-2.909 0-5.793-.32-8.619-.956M48.166 87.5c-16.26 0-31.05-10.22-36.8-25.435a1.941 1.941 0 0 1 2.442-2.524 35.387 35.387 0 0 0 11.444 1.9c19.549 0 35.453-15.905 35.453-35.454 0-4.3-.769-8.516-2.285-12.526a1.941 1.941 0 0 1 2.442-2.524A39.326 39.326 0 0 1 87.5 48.165c0 21.69-17.645 39.335-39.334 39.335",fill:"white"})})}),Object(u.jsx)("span",{children:"Sleep"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)(i.b,{to:"/meditate",activeclassname:"active",children:[Object(u.jsx)("div",{children:Object(u.jsx)("svg",{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M48.003 27.035c-11.562 0-20.968 9.407-20.968 20.969 0 11.558 9.406 20.961 20.968 20.961 11.558 0 20.962-9.403 20.962-20.961 0-11.562-9.404-20.969-20.962-20.969m0 47.928c-14.869 0-26.966-12.094-26.966-26.959 0-14.869 12.097-26.967 26.966-26.967 14.866 0 26.96 12.098 26.96 26.967 0 14.865-12.094 26.959-26.96 26.959m0-60.463C29.53 14.5 14.5 29.53 14.5 48.007 14.5 66.475 29.53 81.5 48.004 81.5c18.47 0 33.496-15.025 33.496-33.493C81.5 29.53 66.474 14.5 48.004 14.5m0 73C26.222 87.5 8.5 69.783 8.5 48.007 8.5 26.223 26.222 8.5 48.004 8.5 69.782 8.5 87.5 26.223 87.5 48.007 87.5 69.783 69.782 87.5 48.004 87.5",fillRule:"evenodd",fill:"white"})})}),Object(u.jsx)("span",{children:"Meditate"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)(i.b,{to:"/body",activeclassname:"active",children:[Object(u.jsx)("div",{children:Object(u.jsx)("svg",{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M32.074 8.5c-1.134 0-2.27.275-3.374.816-3.98 1.952-5.402 5.909-3.537 9.847.16.335 3.438 7.145 10.488 13.577-7.887 7.77-10.986 20.253-11.135 20.864l-5.904 24.067c-.493 1.456-.32 2.89-.072 3.871.872 3.465 3.947 5.89 7.475 5.89.618 0 1.234-.076 1.833-.226 2.903-.731 4.983-2.76 5.711-5.568l.02-.075c1.464-6.134 3.37-13.034 4.947-17.827 1.642 4.797 3.641 11.718 5.188 17.873.736 2.843 2.871 4.95 5.714 5.666a7.516 7.516 0 0 0 1.82.225c3.534 0 6.615-2.438 7.493-5.928.203-.806.445-2.332-.072-3.877l-5.894-24.033c-.168-.851-.704-4.657 2.506-6.805 3.657 2.658 6.51 6.647 8.312 11.654l.102.281c1.157 3.086 3.718 5.004 6.683 5.004.944 0 1.916-.192 2.887-.569 4.038-1.571 5.097-5.687 4.072-8.991-1.34-4.882-6.755-14.401-7.372-15.477l-.028-.047a28.062 28.062 0 0 0-5.337-6.519c4.664-1.448 8.061-5.804 8.061-10.938 0-6.313-5.137-11.449-11.45-11.449-6.314 0-11.45 5.136-11.45 11.449 0 .533.037 1.058.107 1.572-4.44-2.892-9.34-6.744-11.467-10.544-.989-1.753-3.233-3.783-6.327-3.783m29.137 5.306a7.45 7.45 0 1 1-7.45 7.449 7.45 7.45 0 0 1 7.45-7.449M32.074 12.5c1.856 0 2.837 1.735 2.837 1.735 4.935 8.825 20.49 16.378 20.49 16.378 3.985 2.23 8.126 5.12 11.094 10.136 0 0 5.807 10.129 7.003 14.616 0 0 1.01 3.087-1.683 4.134-.535.208-1.012.297-1.437.297-1.714 0-2.578-1.45-2.938-2.409-.448-1.196-3.33-10.177-11.873-15.108-8.732 3.137-6.69 12.274-6.69 12.274l5.96 24.305c.213.508.162 1.198.025 1.738-.437 1.741-1.974 2.904-3.614 2.904-.279 0-.562-.034-.843-.104-1.502-.378-2.464-1.417-2.812-2.763 0 0-6.452-25.666-9.114-25.666-2.663 0-8.792 25.666-8.792 25.666-.348 1.346-1.31 2.315-2.812 2.693a3.565 3.565 0 0 1-.86.106c-1.633 0-3.16-1.136-3.597-2.871-.136-.54-.189-1.213.026-1.721l5.96-24.296s3.83-15.827 13.61-21.763c-8.285-6.028-12.563-13.909-13.236-15.33-.673-1.421-.779-3.336 1.683-4.543.595-.292 1.134-.408 1.613-.408",fillRule:"evenodd",fill:"white"})})}),Object(u.jsx)("span",{children:"Body"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)(i.b,{to:"/scenes",activeclassname:"active",children:[Object(u.jsx)("div",{children:Object(u.jsx)("svg",{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M64.026 73.625L54.78 53.971l7.995-14.425L82.07 73.625H64.026zm-50.36-.001l13.657-28.728 2.262 4.119a1.994 1.994 0 0 0 1.753 1.038c.387 0 .77-.114 1.1-.331l4.327-2.852 4.327 2.852a2.001 2.001 0 0 0 2.864-.726l2.162-4.041 13.487 28.669h-45.94zm23.089-48.57l7.24 15.389-2.532 4.733-3.598-2.371a1.996 1.996 0 0 0-2.201 0l-3.617 2.384-2.607-4.747 7.315-15.388zM87.24 74.64L64.497 34.469c-.356-.63-1.01-.973-1.75-1.015a2.004 2.004 0 0 0-1.74 1.03L52.68 49.508 38.574 19.524a2 2 0 0 0-1.805-1.149h-.004a2 2 0 0 0-1.806 1.142L8.694 74.766a1.998 1.998 0 0 0 1.807 2.858h52.246l.009.001H85.5a1.999 1.999 0 0 0 1.74-2.985z",fillRule:"evenodd",fill:"white"})})}),Object(u.jsx)("span",{children:"Scenes"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)(i.b,{to:"/profile",activeclassname:"active",children:[Object(u.jsx)("div",{children:Object(u.jsx)("svg",{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M48 54.865c-6.88 0-12.477-5.597-12.477-12.477 0-6.879 5.597-12.477 12.477-12.477s12.477 5.598 12.477 12.477c0 6.88-5.597 12.477-12.477 12.477m23.305 19.88c-1.332-8.374-7.085-15.29-14.784-18.28 4.759-2.894 7.956-8.113 7.956-14.077 0-9.085-7.392-16.477-16.477-16.477s-16.477 7.392-16.477 16.477c0 5.965 3.196 11.183 7.956 14.076-7.699 2.992-13.452 9.907-14.784 18.281C17.23 68.232 12.5 58.661 12.5 48c0-19.575 15.925-35.5 35.5-35.5S83.5 28.425 83.5 48c0 10.661-4.73 20.232-12.195 26.745m-42.862 2.862C28.897 67.2 37.482 58.865 48 58.865c10.518 0 19.103 8.334 19.557 18.742A35.282 35.282 0 0 1 48 83.5a35.282 35.282 0 0 1-19.557-5.893M48 8.5C26.22 8.5 8.5 26.22 8.5 48S26.22 87.5 48 87.5 87.5 69.78 87.5 48 69.78 8.5 48 8.5",fillRule:"evenodd",fill:"white"})})}),Object(u.jsx)("span",{children:"Profile"})]})})]})}),Object(u.jsxs)("div",{className:"scene-audio",children:[Object(u.jsx)("p",{children:"Scene audio"}),Object(u.jsx)("audio",{controls:!0,loop:!0,autoPlay:!0,src:e.scene.audio,title:e.scene.title})]})]})}));var f=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(null),i=Object(j.a)(l,2),r=i[0],d=i[1],o=Object(n.useState)(null),b=Object(j.a)(o,2),h=b[0],O=b[1];return Object(n.useEffect)((function(){var t=e.activeStory,c=e.page;"Sleep"===c?fetch("/one_sleepstory/id/".concat(t)).then((function(e){return e.json()})).then((function(e){return a(e)})):"Body"===c?fetch("/one_bodytrack/id/".concat(t)).then((function(e){return e.json()})).then((function(e){return a(e)})):"Meditate"===c&&fetch("/one_meditation/id/".concat(t)).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(u.jsxs)("div",{className:"player",children:[Object(u.jsx)("button",{onClick:e.closePlayer,children:Object(u.jsx)("svg",{height:"32",width:"32",className:"AudioSessionPlayer__BackButton-ae6l4y-12 cvQZxx",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{fill:"white",d:"M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82",fillRule:"evenodd"})})}),Object(u.jsxs)("div",{className:"info",children:[null!=s?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"circle-image",children:Object(u.jsx)("img",{src:s.image})}),Object(u.jsx)("p",{className:"name",children:s.name})]}):null,"Meditate"===e.page?Object(u.jsxs)(u.Fragment,{children:[s?Object(u.jsx)("ul",{className:"series-list",children:s.tracks?s.tracks.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:r===e.title?"active":"",onClick:function(){!function(e){d(s.tracks[e].title),O(s.tracks[e].audio)}(t)},children:e.title})},t)})):null}):null,r?Object(u.jsx)("audio",{controls:!0,src:h,title:r}):null]}):Object(u.jsx)(u.Fragment,{children:null!=s?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"author-info",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"narrator"}),Object(u.jsx)("p",{children:s.narrator})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"duration"}),Object(u.jsx)("p",{children:s.duration})]})]}),s.audio?Object(u.jsx)("audio",{controls:!0,src:s.audio,title:s.name}):null]}):null})]})]})};var v=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(!1),i=Object(j.a)(l,2),r=i[0],d=i[1];return Object(n.useEffect)((function(){fetch("/one_meditation/id/".concat("61af954725588841b7cbeafe")).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(u.jsxs)("div",{className:"featured page",children:[Object(u.jsx)("div",{className:"page-header",children:Object(u.jsx)("h1",{children:"Featured"})}),s?Object(u.jsxs)("div",{className:"card featured",onClick:function(e){d(!0)},children:[Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:s.image})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("span",{children:s.name}),Object(u.jsx)("span",{children:function(){var e=new Date(s.dateCreated);return new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric"}).format(e)}()})]}),Object(u.jsx)("svg",{height:"32",width:"32",color:"#14141499",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M72.786 44.077l-.991 1.737L27.26 20.401a3.108 3.108 0 0 0-3.046-.005c-.926.524-1.5 1.5-1.5 2.536v50.136c0 1.028.57 2 1.485 2.525a3.094 3.094 0 0 0 3.03.023l44.534-24.723a2.935 2.935 0 0 0 1.522-2.532 2.928 2.928 0 0 0-1.49-2.546l.991-1.738zm4.5 4.307a6.935 6.935 0 0 1-3.58 6.006L29.168 79.113a7.096 7.096 0 0 1-6.959-.05 6.934 6.934 0 0 1-3.495-5.995V22.932a6.933 6.933 0 0 1 3.53-6.017 7.108 7.108 0 0 1 6.997.012L73.777 42.34a6.928 6.928 0 0 1 3.508 6.044z",fillRule:"evenodd"})})]})]}):null,!0===r?Object(u.jsx)(f,{activeStory:s._id,page:"Meditate",closePlayer:function(){d(!1)}}):null]})};var m=function(e){var t=Object(n.useRef)(null),c=Object(n.useRef)(null),s=Object(n.useRef)(null),a=Object(n.useRef)(null),l=Object(n.useRef)(null),i=Object(n.useRef)(null);return Object(u.jsx)("div",{className:"modal transparent-background",children:Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=new FormData;r.append("category",e.page),r.append("name",t.current.value),c.current?r.append("narrator",c.current.value):r.append("narrator",""),s.current?r.append("duration",s.current.value):r.append("duration",""),r.append("image",a.current.files[0]),r.append("audio",l.current.files[0]),i.current?r.append("video",i.current.files[0]):r.append("video",""),e.toggleForm(),e.showLoader(),fetch("/upload_single",{method:"POST",body:r}).then((function(t){e.hideLoader(),e.getAll()}))},children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{required:!0,type:"text",ref:t}),"Sleep"===e.page||"Body"===e.page?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{children:"Narrator"}),Object(u.jsx)("input",{required:!0,type:"text",ref:c}),Object(u.jsx)("label",{children:"Duration"}),Object(u.jsx)("input",{required:!0,type:"text",ref:s})]}):null,Object(u.jsx)("label",{children:"Image"}),Object(u.jsx)("input",{required:!0,type:"file",ref:a}),Object(u.jsx)("label",{children:"Audio"}),Object(u.jsx)("input",{required:!0,type:"file",ref:l}),"Scenes"===e.page?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{children:"Video"}),Object(u.jsx)("input",{required:!0,type:"file",ref:i})]}):null,Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:e.toggleForm,children:"Cancel"}),Object(u.jsx)("button",{type:"submit",children:"Upload"})]})]})})};var g=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(null),i=Object(j.a)(l,2),r=i[0],d=i[1],o=Object(n.useState)(!1),b=Object(j.a)(o,2),h=b[0],O=b[1],x=Object(n.useState)(!1),p=Object(j.a)(x,2),v=p[0],g=p[1],w=Object(n.useState)(!1),S=Object(j.a)(w,2),y=S[0],N=S[1],C=function(){fetch("/all_sleep").then((function(e){return e.json()})).then((function(e){var t=e.sort((function(e,t){return new Date(e.dateCreated)-new Date(t.dateCreated)}));a(t)}))};Object(n.useEffect)(C,[]);var k=function(){O(!h)};return Object(u.jsxs)("div",{className:"sleep page",children:[Object(u.jsxs)("div",{className:"page-header",children:[Object(u.jsx)("h1",{children:"Sleep"}),Object(u.jsx)("button",{className:"primary",onClick:k,children:"Add new sleep story"})]}),!0===y?Object(u.jsx)("p",{children:"Uploading..."}):null,Object(u.jsx)("ul",{className:"cards",children:s?s.map((function(e,t){return Object(u.jsxs)("li",{className:"card",onClick:function(){var t;t=e._id,g(!0),d(t)},children:[Object(u.jsx)("span",{className:"duration",children:e.duration}),Object(u.jsx)("img",{src:e.image}),Object(u.jsx)("span",{className:"narrator",children:e.narrator})]},t)})):null}),!0===h?Object(u.jsx)(m,{getAll:C,page:"Sleep",toggleForm:k,showLoader:function(){N(!0)},hideLoader:function(){N(!1)}}):null,!0===v?Object(u.jsx)(f,{activeStory:r,page:"Sleep",closePlayer:function(){g(!1)}}):null]})};var w=function(e){var t=Object(n.useRef)(null),c=Object(n.useRef)(null),s=Object(n.useRef)(null);return Object(u.jsx)("div",{className:"modal",children:Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault();var s=[],a=document.querySelectorAll('input[name="title"]'),l=document.querySelectorAll('input[name="audio"]');a.forEach((function(e,t){s.push({title:e.value,audio:l[t].files[0]})}));var i=new FormData;i.append("name",t.current.value),i.append("image",c.current.files[0]),s.forEach((function(e,t){i.append("trackTitles[]",e.title),i.append("tracks[]",e.audio)})),e.toggleForm(),e.showLoader(),fetch("/upload_series",{method:"POST",body:i}).then((function(t){e.hideLoader(),e.getAll()}))},children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{required:!0,type:"text",ref:t}),Object(u.jsx)("label",{children:"Image"}),Object(u.jsx)("input",{required:!0,type:"file",ref:c}),Object(u.jsx)("div",{className:"tracks-list",ref:s,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)("input",{required:!0,type:"text",name:"title"}),Object(u.jsx)("label",{children:"Audio"}),Object(u.jsx)("input",{required:!0,type:"file",name:"audio"})]})}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",onClick:function(){var e=document.createElement("div"),t=document.createElement("label"),c=document.createElement("input"),n=document.createElement("label"),a=document.createElement("input");t.innerText="Title",n.innerText="Audio",c.setAttribute("type","text"),c.setAttribute("name","title"),a.setAttribute("type","file"),a.setAttribute("name","audio"),e.append(t),e.append(c),e.append(n),e.append(a),s.current.append(e)},children:"Add another track"}),Object(u.jsx)("button",{type:"button",onClick:e.toggleForm,children:"Cancel"}),Object(u.jsx)("button",{type:"submit",children:"Upload"})]})]})})};var S=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(null),i=Object(j.a)(l,2),r=i[0],d=i[1],o=Object(n.useState)(!1),b=Object(j.a)(o,2),h=b[0],O=b[1],x=Object(n.useState)(!1),p=Object(j.a)(x,2),v=p[0],m=p[1],g=Object(n.useState)(!1),S=Object(j.a)(g,2),y=S[0],N=S[1],C=function(){fetch("/all_meditations").then((function(e){return e.json()})).then((function(e){var t=e.sort((function(e,t){return new Date(e.dateCreated)-new Date(t.dateCreated)}));a(t)}))};Object(n.useEffect)(C,[]);var k=function(){O(!h)};return Object(u.jsxs)("div",{className:"meditate page",children:[Object(u.jsxs)("div",{className:"page-header",children:[Object(u.jsx)("h1",{children:"Meditate"}),Object(u.jsx)("button",{className:"primary",onClick:k,children:"Add new meditation series"})]}),!0===y?Object(u.jsx)("p",{children:"Uploading..."}):null,Object(u.jsx)("ul",{className:"cards",children:s?s.map((function(e,t){return Object(u.jsxs)("li",{className:"card",onClick:function(){var t;t=e._id,m(!0),d(t)},children:[Object(u.jsx)("img",{src:e.image}),Object(u.jsx)("span",{className:"narrator",children:e.name})]},t)})):null}),!0===h?Object(u.jsx)(w,{getAll:C,toggleForm:k,showLoader:function(){N(!0)},hideLoader:function(){N(!1)}}):null,!0===v?Object(u.jsx)(f,{activeStory:r,page:"Meditate",closePlayer:function(){m(!1)}}):null]})};var y=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(null),i=Object(j.a)(l,2),r=i[0],d=i[1],o=Object(n.useState)(!1),b=Object(j.a)(o,2),h=b[0],O=b[1],x=Object(n.useState)(!1),p=Object(j.a)(x,2),v=p[0],g=p[1],w=Object(n.useState)(!1),S=Object(j.a)(w,2),y=S[0],N=S[1],C=function(){fetch("/all_body").then((function(e){return e.json()})).then((function(e){var t=e.sort((function(e,t){return new Date(e.dateCreated)-new Date(t.dateCreated)}));a(t)}))};Object(n.useEffect)(C,[]);var k=function(){O(!h)};return Object(u.jsxs)("div",{className:"body page",children:[Object(u.jsxs)("div",{className:"page-header",children:[Object(u.jsx)("h1",{children:"Body"}),Object(u.jsx)("button",{className:"primary",onClick:k,children:"Add new body track"})]}),!0===y?Object(u.jsx)("p",{children:"Uploading..."}):null,Object(u.jsx)("ul",{className:"cards",children:s?s.map((function(e,t){return Object(u.jsxs)("li",{className:"card",onClick:function(){var t;t=e._id,g(!0),d(t)},children:[Object(u.jsx)("span",{className:"duration",children:e.duration}),Object(u.jsx)("img",{src:e.image}),Object(u.jsx)("span",{className:"narrator",children:e.narrator})]},t)})):null}),!0===h?Object(u.jsx)(m,{getAll:C,page:"Body",toggleForm:k,showLoader:function(){N(!0)},hideLoader:function(){N(!1)}}):null,!0===v?Object(u.jsx)(f,{activeStory:r,page:"Body",closePlayer:function(){g(!1)}}):null]})};var N=Object(d.b)(null,(function(e){return{setScene:function(t){return e({type:"SET_SCENE",scene:t})}}}))((function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(!1),i=Object(j.a)(l,2),r=i[0],d=i[1],o=Object(n.useState)(!1),b=Object(j.a)(o,2),h=b[0],O=b[1],x=function(){fetch("/all_scenes").then((function(e){return e.json()})).then((function(e){var t=e.sort((function(e,t){return new Date(e.dateCreated)-new Date(t.dateCreated)}));a(t)}))};Object(n.useEffect)(x,[]);var p=function(){d(!r)};return Object(u.jsxs)("div",{className:"scenes page",children:[Object(u.jsxs)("div",{className:"page-header",children:[Object(u.jsx)("h1",{children:"Scenes"}),Object(u.jsx)("button",{className:"primary",onClick:p,children:"Add new scene"})]}),!0===h?Object(u.jsx)("p",{children:"Uploading..."}):null,Object(u.jsx)("ul",{className:"cards",children:s?s.map((function(t,c){return Object(u.jsxs)("li",{className:"card",onClick:function(){var c;c=t._id,fetch("/one_scene/id/".concat(c)).then((function(e){return e.json()})).then((function(t){e.setScene(t)}))},children:[Object(u.jsx)("img",{src:t.image}),Object(u.jsx)("span",{className:"narrator",children:t.name})]},c)})):null}),!0===r?Object(u.jsx)(m,{getAll:x,page:"Scenes",toggleForm:p,showLoader:function(){O(!0)},hideLoader:function(){O(!1)}}):null]})}));var C=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(null),i=Object(j.a)(l,2),d=(i[0],i[1],Object(n.useRef)(null)),o=Object(n.useRef)(null),b=Object(n.useRef)(null);return Object(u.jsxs)("div",{className:"change-password",children:[Object(u.jsx)("button",{onClick:e.handleShowMenu,children:Object(u.jsx)("svg",{className:"ScreenTitle__IconChevron-sc-1uv8lep-0 edPSSh",xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82",fillRule:"evenodd",fill:"white"})})}),Object(u.jsx)("h1",{children:"Change Password"}),Object(u.jsxs)("div",{className:"transparent-background",children:[Object(u.jsx)("p",{children:s}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=Object(r.a)({},e.userData);o.current.value!==b.current.value?a("Passwords don't match"):(c.oldpassword=d.current.value,c.newpassword=o.current.value,fetch("/change_password",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(t){"success"===t.status&&(e.handleShowMenu(),e.showToastMessage(t.message))})))},className:"change-password",children:[Object(u.jsx)("label",{children:"Old Password"}),Object(u.jsx)("input",{required:!0,type:"password",ref:d}),Object(u.jsx)("label",{children:"New Password"}),Object(u.jsx)("input",{required:!0,type:"password",ref:o}),Object(u.jsx)("label",{children:"Retype Password"}),Object(u.jsx)("input",{required:!0,type:"password",ref:b}),Object(u.jsx)("button",{type:"submit",children:"Update"})]})]})]})};var k=function(e){var t;return Object(u.jsxs)("div",{className:"stats",children:[Object(u.jsx)("button",{onClick:e.handleShowMenu,children:Object(u.jsx)("svg",{className:"ScreenTitle__IconChevron-sc-1uv8lep-0 edPSSh",xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82","fill-rule":"evenodd",fill:"white"})})}),Object(u.jsx)("h1",{children:"My Stats"}),Object(u.jsxs)("div",{className:"transparent-background",children:[Object(u.jsxs)("div",{className:"mindful-days",children:[Object(u.jsx)("p",{children:e.userData.activeDays}),Object(u.jsx)("p",{children:"Mindful Days"})]}),Object(u.jsxs)("div",{className:"other-stats",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Longest Streak"}),Object(u.jsx)("p",{children:e.userData.streak})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Total Sessions"}),Object(u.jsx)("p",{children:e.userData.totalSessions})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Mindful Minutes"}),Object(u.jsx)("p",{children:(t=e.userData.totalMinutes,Math.floor(t/60)+"h "+t%60+"m")})]})]})]})]})};var M=Object(d.b)((function(e){return{userData:e.userData}}))((function(e){var t=Object(n.useState)(!0),c=Object(j.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(!1),i=Object(j.a)(l,2),r=i[0],d=i[1],o=Object(n.useState)(!1),b=Object(j.a)(o,2),h=b[0],O=b[1],x=function(){a(!0),d(!1),O(!1)};return Object(u.jsxs)("div",{className:"profile page",children:[!0===s?Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsx)("h1",{children:"Profile"}),Object(u.jsxs)("button",{className:"transparent-background",onClick:function(){O(!0),a(!1)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("svg",{className:"Profile__PlayIcon-sc-6s1fdj-4 bqnuXa",xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{fill:"#FFF",fillRule:"evenodd",d:"M15 55h14a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V58a3 3 0 0 1 3-3zm52-17h14a3 3 0 0 1 3 3v36a3 3 0 0 1-3 3H67a3 3 0 0 1-3-3V41a3 3 0 0 1 3-3zM41 17h14a3 3 0 0 1 3 3v57a3 3 0 0 1-3 3H41a3 3 0 0 1-3-3V20a3 3 0 0 1 3-3z"})}),Object(u.jsx)("span",{children:"My Stats"})]}),Object(u.jsx)("svg",{height:"20",width:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82","fill-rule":"evenodd",fill:"white"})})]}),Object(u.jsxs)("button",{className:"transparent-background",onClick:function(){d(!0),a(!1)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("svg",{height:"26",width:"26",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M55.444 54.757a7.437 7.437 0 0 1-4.607 6.874v7.835a2.84 2.84 0 0 1-2.843 2.826 2.831 2.831 0 0 1-2.825-2.826v-7.834a7.433 7.433 0 0 1-4.602-6.875A7.43 7.43 0 0 1 48 47.323c4.108 0 7.444 3.325 7.444 7.434zm20.498 26.496a2.25 2.25 0 0 1-2.247 2.247H22.31a2.252 2.252 0 0 1-2.253-2.247V38.368a2.254 2.254 0 0 1 2.253-2.252h51.383a2.252 2.252 0 0 1 2.248 2.252v42.885zM30.1 30.399c0-9.87 8.03-17.899 17.9-17.899S65.9 20.529 65.9 30.399v1.717H30.1v-1.717zm43.594 1.717H69.9v-1.717C69.9 18.324 60.075 8.5 48 8.5s-21.9 9.824-21.9 21.899v1.717h-3.79a6.259 6.259 0 0 0-6.252 6.252v42.885c0 3.444 2.805 6.247 6.253 6.247h51.383a6.255 6.255 0 0 0 6.248-6.247V38.368c0-3.447-2.803-6.252-6.247-6.252z",fillRule:"evenodd",fill:"white"})}),Object(u.jsx)("span",{children:"Change Password"})]}),Object(u.jsx)("svg",{height:"20",width:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82","fill-rule":"evenodd",fill:"white"})})]}),Object(u.jsxs)("button",{className:"transparent-background",onClick:function(){window.location.href.includes("/#/profile")&&(window.location=window.location.href.replace("/#/profile","")),fetch("/logout").then((function(e){return e.json()})).then(e.checkLoggedIn)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("svg",{height:"26",width:"26",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M60.354 22.592V42.73a2 2 0 0 0 4 0V22.592c0-6.176-5.235-11.201-11.67-11.201H20.169c-6.434 0-11.669 5.025-11.669 11.201V82.609a2 2 0 0 0 4 0V22.592c0-3.971 3.44-7.201 7.669-7.201h32.515c4.23 0 7.67 3.23 7.67 7.201M87.376 54.96l.033-.105c.053-.18.091-.368.091-.567a2.02 2.02 0 0 0-.091-.568l-.033-.103a1.965 1.965 0 0 0-.266-.505c-.007-.01-.009-.02-.016-.03l-8.308-10.987a2 2 0 1 0-3.19 2.414l5.884 7.779H47.102a2 2 0 0 0 0 4H81.48l-5.884 7.78a1.999 1.999 0 1 0 3.19 2.412l8.308-10.986c.007-.009.009-.021.016-.029.112-.154.201-.324.266-.505M64.354 65.839v16.77a2 2 0 0 1-4 0v-16.77a2 2 0 0 1 4 0",fillRule:"evenodd",fill:"white"})}),Object(u.jsx)("span",{children:"Logout"})]}),Object(u.jsx)("svg",{height:"20",width:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(u.jsx)("path",{d:"M64 82a1.992 1.992 0 0 1-1.414-.586l-32-32a2 2 0 0 1 0-2.828l32-32a2 2 0 1 1 2.828 2.828L34.829 48l30.585 30.586A2 2 0 0 1 64 82","fill-rule":"evenodd",fill:"white"})})]}),Object(u.jsxs)("p",{children:["Logged in as: ",e.userData.username]})]}):null,!0===r?Object(u.jsx)(C,{userData:e.userData,handleShowMenu:x,showToastMessage:e.showToastMessage}):null,!0===h?Object(u.jsx)(k,{userData:e.userData,handleShowMenu:x}):null]})}));var D=Object(d.b)((function(e){return{scene:e.scene}}),(function(e){return{setScene:function(t){return e({type:"SET_SCENE",scene:t})}}}))((function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("/one_scene/id/61af77177d801406f9b25539").then((function(e){return e.json()})).then((function(t){e.setScene(t)}))}),[]),Object(u.jsxs)("div",{className:"app",children:[null!=s?Object(u.jsx)(h,{message:s}):null,Object(u.jsx)(p,{}),Object(u.jsxs)(x.c,{children:[Object(u.jsx)(x.a,{exact:!0,path:"/",element:Object(u.jsx)(v,{})}),Object(u.jsx)(x.a,{exact:!0,path:"/sleep",element:Object(u.jsx)(g,{})}),Object(u.jsx)(x.a,{exact:!0,path:"/meditate",element:Object(u.jsx)(S,{})}),Object(u.jsx)(x.a,{exact:!0,path:"/body",element:Object(u.jsx)(y,{})}),Object(u.jsx)(x.a,{exact:!0,path:"/scenes",element:Object(u.jsx)(N,{})}),Object(u.jsx)(x.a,{exact:!0,path:"/profile",element:Object(u.jsx)(M,{checkLoggedIn:e.checkLoggedIn,showToastMessage:function(e){a(e),setTimeout((function(){a(null)}),3e3)}})})]}),Object(u.jsx)("div",{className:"background-scene",children:Object(u.jsx)("video",{loop:!0,playsInline:!0,autoPlay:!0,muted:!0,src:e.scene.video})})]})}));var L=Object(d.b)(null,(function(e){return{updateData:function(t){return e({type:"UPDATE_DATA",userData:t})}}}))((function(e){var t=Object(n.useState)(!1),c=Object(j.a)(t,2),s=c[0],a=c[1],l=function(){fetch("/home").then((function(e){return e.json()})).then((function(t){if("success"===t.message){a(!0);var c=Object(r.a)({},t.user);e.updateData(c)}else a(!1),e.updateData({})}))};return Object(n.useEffect)(l,[]),!0===s?Object(u.jsx)(D,{checkLoggedIn:l}):Object(u.jsx)(O,{loggedin:s,checkLoggedIn:l})})),A=c(9),R={},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_DATA"===t.type?t.userData:e},_={},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return"SET_SCENE"===t.type?t.scene:e},F=Object(A.a)({userData:P,scene:T}),B=Object(A.b)(F);l.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(d.a,{store:B,children:Object(u.jsx)(L,{})})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.e76565f3.chunk.js.map