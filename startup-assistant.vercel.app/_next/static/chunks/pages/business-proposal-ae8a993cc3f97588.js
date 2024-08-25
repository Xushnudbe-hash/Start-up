(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [529], {
        2173: function(e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/business-proposal", function() {
                return t(7015)
            }])
        },
        4949: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return o
                }
            });
            var n = t(5893);

            function a(e) {
                let {
                    outerStyle: r = "h-16 w-16",
                    innerStyle: t = "h-10 w-10",
                    innerBg: a = "bg-[#F1F2F4]"
                } = e;
                return (0, n.jsx)("div", {
                    className: "flex ".concat(r, " items-center justify-center rounded-full bg-gradient-to-tr from-gray-800 to-gray-400 animate-spin"),
                    children: (0, n.jsx)("div", {
                        className: "".concat(t, "  rounded-full ").concat(a, "  p-0")
                    })
                })
            }

            function o(e) {
                let {
                    children: r
                } = e;
                return (0, n.jsx)("div", {
                    className: "absolute top-0 left-0 bg-gray-300/30 w-full h-full flex justify-center items-center rounded-lg",
                    children: (0, n.jsxs)("div", {
                        className: "flex flex-col justify-center items-center",
                        children: [(0, n.jsx)(a, {}), r]
                    })
                })
            }
        },
        6140: function(e, r, t) {
            "use strict";
            t.d(r, {
                I: function() {
                    return s
                }
            });
            var n = t(5893),
                a = t(7294),
                o = t(3047);
            let s = a.forwardRef((e, r) => {
                let {
                    className: t,
                    type: a,
                    ...s
                } = e;
                return (0, n.jsx)("input", {
                    type: a,
                    className: (0, o.cn)("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t),
                    ref: r,
                    ...s
                })
            });
            s.displayName = "Input"
        },
        7997: function(e, r, t) {
            "use strict";
            t.d(r, {
                g: function() {
                    return s
                }
            });
            var n = t(5893),
                a = t(7294),
                o = t(3047);
            let s = a.forwardRef((e, r) => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, n.jsx)("textarea", {
                    className: (0, o.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t),
                    ref: r,
                    ...a
                })
            });
            s.displayName = "Textarea"
        },
        7015: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                __N_SSP: function() {
                    return h
                },
                default: function() {
                    return p
                }
            });
            var n = t(5893),
                a = t(9008),
                o = t.n(a),
                s = t(7294),
                l = t(3299),
                i = t(3948),
                u = t(4949),
                c = t(4819),
                d = t(6140),
                f = t(7997),
                m = t(1163),
                h = !0;

            function p() {
                let e = (0, m.useRouter)(),
                    {
                        data: r
                    } = (0, l.useSession)(),
                    [t, a] = (0, s.useState)(!1),
                    [h, p] = (0, s.useState)(""),
                    [x, b] = (0, s.useState)({
                        projectName: "",
                        serviceOffering: "",
                        location: "",
                        targetCustomer: "",
                        monthlyRevenue: "",
                        revenueProjection: "",
                        brandIdentity: "",
                        founderName: "",
                        founderResponsibility: ""
                    }),
                    y = e => {
                        b({ ...x,
                            [e.target.name]: e.target.value
                        })
                    },
                    g = [{
                        label: "Company Name",
                        placeholder: "What is the name of your Company",
                        required: !0,
                        value: x.projectName,
                        onChange: y,
                        type: "text",
                        name: "projectName"
                    }, {
                        label: "Describe your service offering",
                        placeholder: "Describe what your company does.",
                        required: !0,
                        value: x.serviceOffering,
                        onChange: y,
                        type: "textarea",
                        name: "serviceOffering"
                    }, {
                        label: "Where is your company located?",
                        placeholder: "London, United Kingdom",
                        required: !0,
                        value: x.location,
                        onChange: y,
                        type: "text",
                        name: "location"
                    }, {
                        label: "Who are your target customer?",
                        placeholder: "Describe your target customer",
                        required: !0,
                        value: x.targetCustomer,
                        onChange: y,
                        type: "text",
                        name: "targetCustomer"
                    }, {
                        label: "What is your current monthly revenue?",
                        placeholder: "If you don't have revenue. State that you don't have.",
                        required: !0,
                        value: x.monthlyRevenue,
                        onChange: y,
                        type: "textarea",
                        name: "monthlyRevenue"
                    }, {
                        label: "What is your revenue projection?",
                        placeholder: "Describe what your revenue will look like few months/years from now.",
                        required: !0,
                        value: x.revenueProjection,
                        onChange: y,
                        type: "textarea",
                        name: "revenueProjection"
                    }, {
                        label: "Describe your brand identity",
                        placeholder: "Explain what your company stand for",
                        required: !0,
                        value: x.brandIdentity,
                        onChange: y,
                        type: "textarea",
                        name: "brandIdentity"
                    }, {
                        label: "Name of the Co-founders",
                        placeholder: "List the name of the Co-founders name",
                        required: !0,
                        value: x.founderName,
                        onChange: y,
                        type: "textarea",
                        name: "founderName"
                    }, {
                        label: "Roles of Co-founder",
                        placeholder: "Describe the responsiblities of each Co-founder",
                        required: !0,
                        value: x.founderResponsibility,
                        onChange: y,
                        type: "textarea",
                        name: "founderResponsibility"
                    }],
                    v = async t => {
                        t.preventDefault(), a(!0), p(""), await fetch("/api/business-proposal/create", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ ...x,
                                email: r.user.email
                            })
                        }).then(e => e.json()).then(async r => {
                            a(!1), r.status ? e.push("/business-proposal/".concat(r.data)) : p(r.error)
                        }).catch(e => {
                            a(!1), p("Error occurred! Please try again.")
                        })
                    };
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(o(), {
                        children: (0, n.jsx)("title", {
                            children: "Business Plan | Startup Assistant"
                        })
                    }), (0, n.jsx)("div", {
                        children: (0, n.jsx)(i.Z, {
                            activeTab: "Business Plan",
                            children: (0, n.jsxs)("main", {
                                className: "",
                                children: [(0, n.jsx)("h1", {
                                    className: "text-3xl font-semibold text-center",
                                    children: "Create Business Plan"
                                }), (0, n.jsxs)("div", {
                                    className: "relative max-w-xl mx-auto py-8 sm:px-4 lg:px-6 rounded-lg border bg-card text-card-foreground shadow-sm mt-5",
                                    children: [(0, n.jsxs)("form", {
                                        className: "flex flex-col w-[90%] max-w-lg mx-auto",
                                        onSubmit: v,
                                        children: [g.map((e, r) => (0, n.jsxs)("div", {
                                            className: "flex flex-col mb-3",
                                            children: [(0, n.jsx)("label", {
                                                className: "font-medium mb-2",
                                                children: e.label
                                            }), "textarea" == e.type ? (0, n.jsx)(f.g, {
                                                value: e.value,
                                                onChange: e.onChange,
                                                placeholder: e.placeholder,
                                                required: e.required,
                                                name: e.name
                                            }) : (0, n.jsx)(d.I, {
                                                onChange: e.onChange,
                                                placeholder: e.placeholder,
                                                required: e.required,
                                                value: e.value,
                                                type: e.type,
                                                name: e.name
                                            })]
                                        }, r)), (0, n.jsx)(c.z, {
                                            className: "mt-5",
                                            children: " Generate "
                                        }), h && (0, n.jsx)("p", {
                                            className: "font-semibold text-destructive mt-3",
                                            children: h
                                        })]
                                    }), t && (0, n.jsx)(u.Z, {})]
                                })]
                            })
                        })
                    })]
                })
            }
        },
        1163: function(e, r, t) {
            e.exports = t(880)
        }
    },
    function(e) {
        e.O(0, [664, 675, 339, 948, 774, 888, 179], function() {
            return e(e.s = 2173)
        }), _N_E = e.O()
    }
]);