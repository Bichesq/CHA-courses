export const slides = [
    {
        imgName: '1',
        section: <>
                    <h2>Welcome!</h2>
                    <p>Here is a quick tutorial before you begin:<br /><br />
                    1. Press the Play button to listen to the content.<br /><br />
                    2. Press the Stop button to stop the audio.<br /><br />
                    3. Press the Backward arrow button to go to the previous slide.<br /><br />
                    4. Press the Next arrow button to go to the next slide.<br /><br />
                    </p>
                </>
    },
    {
        imgName: '2',
        section: <>
                    <h2>Introduction</h2>
                    <p><b>Objective:</b> Learn the components of a computer and their
                    individual functions.
                    <br />
                    <br />
                    Welcome to the world of computers! This guide will introduce you to
                    the fundamental building blocks of a computer: its hardware
                    components. Think of hardware as the physical parts of a computer that
                    you can touch and see. Without hardware, there would be no computer!
                    </p>
                </>
    },
    {
        imgName: '3',
        section: <>
                    <h2>The Central Processing Unit</h2>
                    <p>The CPU, often called the "brain" of the computer, is responsible for processing data and instructions.
                    It performs calculations, controls the flow of data, and manages the overall operation of the computer.
                    CPUs come in different speeds and core counts, with higher numbers generally indicating better
                    performance.</p>
                </>
    },
    {
        imgName: '4',
        section: <>
                    <h2>Memory</h2>
                    <p>RAM, or Random Access Memory, is the computer's short-term memory. It stores data that the CPU needs to
                    access quickly. When you open multiple programs, your computer uses RAM to keep track of all the
                    information. RAM is volatile, meaning it loses its data when the computer is turned off.</p>
                </>
    },
    {
        imgName: '5',
        section: <>
                    <h2>Storage Devices</h2>
                    <p>Storage devices store data permanently. There are two main types:</p>
                    <ul>
                    <li>Hard Disk Drive: An HDD uses magnetic disks to store data. They are typically slower but offer large
                        storage capacities.</li>
                    <li>Solid-State Drive: An SSD uses flash memory to store data. They are much faster than HDDs but
                        generally
                        have smaller capacities.</li>
            </ul>
                </>
    },
    {
        imgName: '6',
        section: <>
                    <h2>The Motherboard</h2>
                    <p>Often referred to as the "backbone" of a computer, the motherboard is a large printed circuit board
                    that connects all the major components. It houses the CPU, memory, storage devices, and expansion slots.
                    Think of it as the central hub where everything comes together.</p>
                </>
    },
    {
        imgName: '7',
        section: <>
                   <h2>The Computer Case</h2>
                    <p>The computer case is the enclosure that houses all the internal components of a computer. It protects
                    them
                    from physical damage and provides a structure for airflow. Cases come in various sizes and shapes, from
                    compact desktop cases to larger tower cases.</p>
                </>
    },
    {
        imgName: '8',
        section: <>
                    <h2>Power Supply Unit</h2>
                    <p>The PSU converts electrical power from the wall outlet into a usable form for the computer's
                    components.
                    It
                    provides the necessary voltage and current to power the entire system.</p>
                </>
    },
    {
        imgName: '9',
        section: <>
                    <h2>Graphics Processing Unit</h2>
                    <p>While not essential for all computers, a GPU is crucial for tasks that require heavy graphics
                    processing,
                    such as gaming and video editing. It handles the rendering of images and videos, taking the load off the
                    CPU.
            </p>
                </>
    },
    {
        imgName: '10',
        section: <>
                    <h2>Input Devices</h2>
                    <p>Input devices allow you to interact with the computer. Common input devices include:</p>
                    <ul>
                    <li>Keyboard: For entering text and commands.</li>
                    <li>Mouse: For navigating the computer's interface.</li>
                    <li>Microphone: For capturing audio input.</li>
                    </ul>
                </>
    },
    {
        imgName: '11',
        section: <>
                     <h2>Output Devices</h2>
                    <p>Output devices display or produce information generated by the computer. Common output devices include:
                    </p>
                    <ul>
                    <li>Monitor: Visual display of information.</li>
                    <li>Speakers: Audio output.</li>
                    <li>Printer: Produces physical copies of documents.</li>
            </ul>
                </>
    },
    {
        imgName: '12',
        section: <>
                    <h2>Cooling System</h2>
                    <p>Computers generate heat during operation, and a cooling system is essential to prevent overheating. It
                    typically consists of fans and a heat sink to dissipate heat.</p>
                </>
    },
    {
        imgName: '13',
        section: <>
                    <h2>Expansion Cards</h2>
                    <p>Expansion cards can be inserted into slots on the motherboard to add functionality to the computer.
                    Examples
                    include:</p>
                    <ul>
                    <li>Graphics card: For improved graphics performance.</li>
                    <li>Sound card: For enhanced audio capabilities.</li>
                    <li>Network card: For connecting to a network.</li>
                    </ul>
                </>
    },
    {
        imgName: '14',
        section: <>
                    <h2>Conclusion</h2>
                    <p>This overview provides a solid foundation for understanding computer hardware. By grasping these
                    fundamental
                    components, you'll be well-equipped to explore more advanced topics and make informed decisions when
                    building
                    or upgrading your computer.</p>
                </>
    },{
        imgName: '15',
        section: <>
                    <h2>Congratulations!</h2>
                    <p>What is next for you? Let's do a knowledge check to see if you completely grasped the concepts you
                    just learned.<br /><br />
                    1. Click on the Knowledge Check tab on the top right of your screen and take the quiz.<br /><br />
                    2. Click on the Learning Material to return for any help.<br /><br />
                    If you require additional help please reach out in any of the Chat Groups.</p>
                </>
    },
]

export const knowledgeCheckData = [
    {
        question: <h3>1) What is the component that temporarily stores data for use by the CPU?</h3>,
        answers: [
            { ansId: 'a', ans: 'a) The Storage (SSD or HDD) keeps data for temporary useage.', isCorrect: false },
            {ansId: 'b', ans: 'b) The Power Supply Unit (PSU) stores data persistently for the CPU.', isCorrect: false},
            { ansId: 'c', ans: 'c) The Memory (RAM) stores data temporarily for the CPU.', isCorrect: true },
            { ansId: 'd', ans: "d) The Central Processing Unit (CPU) stores all it's own data persistently.", isCorrect: false }
        ]
    },
    {
        question: <h3>2) What is considered the "backbone" of the computer? It also connects the core components together.</h3>,
        answers: [
            { ansId: 'a', ans: 'a) The Central Processing Unit (CPU) is the backbone and most important component of the system.', isCorrect: false },
            {ansId: 'b', ans: 'b) The Memory (RAM) acts as the device that feeds the CPU data, so it must be the backbone.', isCorrect: false},
            { ansId: 'c', ans: 'c) The Computer Case holds all the components together and therefore is the backbone.', isCorrect: false },
            { ansId: 'd', ans: "d) The Motherboard is referred to as the backbone because it connects all the major components together.", isCorrect: true }
        ]
    },
    {
        question: <h3>1) What is the component that temporarily stores data for use by the CPU?</h3>,
        answers: [
            { ansId: 'a', ans: 'a) The Storage (SSD or HDD) keeps data for temporary useage.', isCorrect: false },
            {ansId: 'b', ans: 'b) The Power Supply Unit (PSU) stores data persistently for the CPU.', isCorrect: false},
            { ansId: 'c', ans: 'c) The Memory (RAM) stores data temporarily for the CPU.', isCorrect: true },
            { ansId: 'd', ans: "d) The Central Processing Unit (CPU) stores all it's own data persistently.", isCorrect: false }
        ]
    },
    {
        message: <>
                    <h3>Congratulations! Your Knowledge is 100%</h3>
                    <p>
                    You can now proceed to the assessment for this course. Upon
                    sucessfully receiving a passing grade on the assessment you will
                    obtain the badge!
                    </p>
                    <p>Good luck! Keep learning and growing!</p>
                </>
    }
]
    