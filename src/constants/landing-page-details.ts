export const availableSubjects = {
    heading: 'Learn together',
    subHeading: 'grow faster',
    contents: [
        { text: "Education is the ability to listen to almost anything without losing your self-confidence" },
        { text: "let's start learning" }
    ],
    subjects: [
        {
            label: 'Java',
            description: 'New code',
            backgroundColor: '#58d4e8',
            textColour: 'black'
        },
        {
            label: 'C++',
            description: 'New code',
            backgroundColor: '#58d4e8',
            textColour: 'white'
        },
        {
            label: 'JavaScript',
            description: 'New code',
            backgroundColor: '#58d4e8',
            textColour: 'grey'
        },
        {
            label: 'Python',
            description: 'New code',
            backgroundColor: '#58d4e8',
            textColour: 'black'
        }
    ]
};
export const allSubjectCourseMap = {
    subjects: [
        {
            label: 'Python',
            cousrseList: [
                {
                    heading: 'Introduction',
                    shortDetails: 'Get started with Python basics',
                    courseMaterial: [
                        {
                            type: "Heading",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Content",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Code",
                            width: 60,
                            content: `
                            var a=7;
                            var b=5;
                            if(a > b) {
                                console.log("a is greater than b");
                            } else {
                                console.log("b is less than a");
                            }
                            `
                        },
                        {
                            type: 'ContentDetails',
                            class: 'red',
                            content: [
                                {type:'text',color:'red',detail:'this is the demo text 1'}, 
                                {type:'text',color:'green',detail:'this is the demo text 2'},
                                {type:'text',color:'grey',detail:'this is the demo text 3'},
                                {type:'link',color:'blue',detail:'https://google.com'}
                            ]
                        }
                    ]
                },
                {
                    heading: 'set up',
                    shortDetails: 'Run your first code',
                    courseMaterial: [
                        {
                            type: "Heading",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Content",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Code",
                            content: `
                            var a=7;
                            var b=5;
                            if(a > b) {
                                console.log("a is greater than b");
                            } else {
                                console.log("b is less than a");
                            }
                            `
                        }
                    ]
                }
            ]
        },
        {
            label: 'JavaScript',
            cousrseList: [
                {
                    heading: 'Introduction',
                    shortDetails: 'Get started with JavaScript basics',
                    courseMaterial: [
                        {
                            type: "Heading",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Content",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Code",
                            content: `
                            var a=7;
                            var b=5;
                            if(a > b) {
                                console.log("a is greater than b");
                            } else {
                                console.log("b is less than a");
                            }
                            `
                        }
                    ]
                },
                {
                    heading: 'set up',
                    shortDetails: 'Run your first code',
                    courseMaterial: [
                        {
                            type: "Heading",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Content",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Code",
                            content: `
                            var a=7;
                            var b=5;
                            if(a > b) {
                                console.log("a is greater than b");
                            } else {
                                console.log("b is less than a");
                            }
                            `
                        }
                    ]
                }
            ]
        },
        {
            label: 'C++',
            cousrseList: [
                {
                    heading: 'Introduction',
                    shortDetails: 'Get started with C++ basics',
                    courseMaterial: [
                        {
                            type: "Heading",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Content",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Code",
                            content: `
                            var a=7;
                            var b=5;
                            if(a > b) {
                                console.log("a is greater than b");
                            } else {
                                console.log("b is less than a");
                            }
                            `
                        }
                    ]
                },
                {
                    heading: 'set up',
                    shortDetails: 'Run your first code',
                    courseMaterial: [
                        {
                            type: "Heading",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Content",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Code",
                            content: `
                            var a=7;
                            var b=5;
                            if(a > b) {
                                console.log("a is greater than b");
                            } else {
                                console.log("b is less than a");
                            }
                            `
                        }
                    ]
                }
            ]
        },
        {
            label: 'Java',
            cousrseList: [
                {
                    heading: 'Introduction',
                    shortDetails: 'Get started with java basics',
                    courseMaterial: [
                        {
                            type: "Heading",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Content",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Code",
                            content: `
                            var a=7;
                            var b=5;
                            if(a > b) {
                                console.log("a is greater than b");
                            } else {
                                console.log("b is less than a");
                            }
                            `
                        }
                    ]
                },
                {
                    heading: 'set up',
                    shortDetails: 'Run your first code',
                    courseMaterial: [
                        {
                            type: "Heading",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Content",
                            content: "Introduction python Basics"
                        },
                        {
                            type: "Code",
                            content: `
                            var a=7;
                            var b=5;
                            if(a > b) {
                                console.log("a is greater than b");
                            } else {
                                console.log("b is less than a");
                            }
                            `
                        }
                    ]
                }
            ]
        }
    ]
}
