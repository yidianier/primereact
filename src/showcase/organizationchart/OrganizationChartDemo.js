import React, { Component } from 'react';
import { OrganizationChart } from '../../components/organizationchart/OrganizationChart';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class OrganizationChartDemo extends Component {

    constructor() {
        super();
        this.state = {
            selection: []
        };

        this.data1 = [{
            label: 'CEO',
            type: 'person',
            className: 'p-person',
            expanded: true,
            data: { name: 'Walter White', 'avatar': 'walter.jpg' },
            children: [
                {
                    label: 'CFO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
                    children: [{
                        label: 'Tax',
                        className: 'department-cfo'
                    },
                    {
                        label: 'Legal',
                        className: 'department-cfo'
                    }],
                },
                {
                    label: 'COO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                    children: [{
                        label: 'Operations',
                        className: 'department-coo'
                    }]
                },
                {
                    label: 'CTO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
                    children: [{
                        label: 'Development',
                        className: 'department-cto',
                        expanded: true,
                        children: [{
                            label: 'Analysis',
                            className: 'department-cto'
                        },
                        {
                            label: 'Front End',
                            className: 'department-cto'
                        },
                        {
                            label: 'Back End',
                            className: 'department-cto'
                        }]
                    },
                    {
                        label: 'QA',
                        className: 'department-cto'
                    },
                    {
                        label: 'R&D',
                        className: 'department-cto'
                    }]
                }
            ]
        }];

        this.data2 = [{
            label: 'F.C Barcelona',
            expanded: true,
            children: [
                {
                    label: 'F.C Barcelona',
                    expanded: true,
                    children: [
                        {
                            label: 'Chelsea FC'
                        },
                        {
                            label: 'F.C. Barcelona'
                        }
                    ]
                },
                {
                    label: 'Real Madrid',
                    expanded: true,
                    children: [
                        {
                            label: 'Bayern Munich'
                        },
                        {
                            label: 'Real Madrid'
                        }
                    ]
                }
            ]
        }];

        this.nodeTemplate = this.nodeTemplate.bind(this);
    }

    nodeTemplate(node) {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={`showcase/demo/images/organization/${node.data.avatar}`} style={{ width: '32px' }} />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        if (node.type === "department") {
            return node.label;
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>OrganizationChart</h1>
                        <p>OrganizationChart visualizes hierarchical organization data.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("organizationChart")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation organizationchart-demo">
                    <h3>Advanced</h3>
                    <OrganizationChart value={this.data1} nodeTemplate={this.nodeTemplate} selection={this.state.selection} selectionMode="multiple"
                        onSelectionChange={event => this.setState({ selection: event.data })} className="company"></OrganizationChart>

                    <h3>Basic</h3>
                    <OrganizationChart value={this.data2}></OrganizationChart>
                </div>

                <OrganizationChartDoc></OrganizationChartDoc>
            </div>
        )
    }
}

export class OrganizationChartDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import {OrganizationChart} from 'primereact/organizationchart';

export class OrganizationChartDemo extends Component {

    constructor() {
        super();
        this.state = {
            selection: []
        };

        this.data1 = [{
            label: 'CEO',
            type: 'person',
            className: 'p-person',
            expanded: true,
            data: {name:'Walter White', 'avatar': 'walter.jpg'},
            children: [
                {
                    label: 'CFO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                    children:[{
                        label: 'Tax',
                        className: 'department-cfo'
                    },
                    {
                        label: 'Legal',
                        className: 'department-cfo'
                    }],
                },
                {
                    label: 'COO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: {name:'Mike E.', 'avatar': 'mike.jpg'},
                    children:[{
                        label: 'Operations',
                        className: 'department-coo'
                    }]
                },
                {
                    label: 'CTO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: {name:'Jesse Pinkman', 'avatar': 'jesse.jpg'},
                    children:[{
                        label: 'Development',
                        className: 'department-cto',
                        expanded: true,
                        children:[{
                            label: 'Analysis',
                            className: 'department-cto'
                        },
                        {
                            label: 'Front End',
                            className: 'department-cto'
                        },
                        {
                            label: 'Back End',
                            className: 'department-cto'
                        }]
                    },
                    {
                        label: 'QA',
                        className: 'department-cto'
                    },
                    {
                        label: 'R&D',
                        className: 'department-cto'
                    }]
                }
            ]
        }];

        this.data2 = [{
            label: 'F.C Barcelona',
            expanded: true,
            children: [
                {
                    label: 'F.C Barcelona',
                    expanded: true,
                    children: [
                        {
                            label: 'Chelsea FC'
                        },
                        {
                            label: 'F.C. Barcelona'
                        }
                    ]
                },
                {
                    label: 'Real Madrid',
                    expanded: true,
                    children: [
                        {
                            label: 'Bayern Munich'
                        },
                        {
                            label: 'Real Madrid'
                        }
                    ]
                }
            ]
        }];

        this.nodeTemplate = this.nodeTemplate.bind(this);
    }

    nodeTemplate(node) {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={\`showcase/demo/images/organization/\${node.data.avatar}\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{ width: '32px' }}/>
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        if (node.type === "department") {
            return node.label;
        }
    }

    render() {
        return (
            <div className="organizationchart-demo">
                <h3>Advanced</h3>
                <OrganizationChart value={this.data1} nodeTemplate={this.nodeTemplate} selection={this.state.selection} selectionMode="multiple"
                    onSelectionChange={event => this.setState({selection: event.data})} className="company"></OrganizationChart>

                <h3>Basic</h3>
                <OrganizationChart value={this.data2}></OrganizationChart>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import {OrganizationChart} from 'primereact/organizationchart';

const OrganizationChartDemo = () => {
    const [selection, setSelection] = useState([]);
    const data1 = [{
        label: 'CEO',
        type: 'person',
        className: 'p-person',
        expanded: true,
        data: {name:'Walter White', 'avatar': 'walter.jpg'},
        children: [
            {
                label: 'CFO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                children:[{
                    label: 'Tax',
                    className: 'department-cfo'
                },
                {
                    label: 'Legal',
                    className: 'department-cfo'
                }],
            },
            {
                label: 'COO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: {name:'Mike E.', 'avatar': 'mike.jpg'},
                children:[{
                    label: 'Operations',
                    className: 'department-coo'
                }]
            },
            {
                label: 'CTO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: {name:'Jesse Pinkman', 'avatar': 'jesse.jpg'},
                children:[{
                    label: 'Development',
                    className: 'department-cto',
                    expanded: true,
                    children:[{
                        label: 'Analysis',
                        className: 'department-cto'
                    },
                    {
                        label: 'Front End',
                        className: 'department-cto'
                    },
                    {
                        label: 'Back End',
                        className: 'department-cto'
                    }]
                },
                {
                    label: 'QA',
                    className: 'department-cto'
                },
                {
                    label: 'R&D',
                    className: 'department-cto'
                }]
            }
        ]
    }];

    const data2 = [{
        label: 'F.C Barcelona',
        expanded: true,
        children: [
            {
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'Chelsea FC'
                    },
                    {
                        label: 'F.C. Barcelona'
                    }
                ]
            },
            {
                label: 'Real Madrid',
                expanded: true,
                children: [
                    {
                        label: 'Bayern Munich'
                    },
                    {
                        label: 'Real Madrid'
                    }
                ]
            }
        ]
    }];

    const nodeTemplate = (node) => {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={\`showcase/demo/images/organization/\${node.data.avatar}\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{ width: '32px' }}/>
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        if (node.type === "department") {
            return node.label;
        }
    };

    return (
        <div className="organizationchart-demo">
            <h3>Advanced</h3>
            <OrganizationChart value={data1} nodeTemplate={nodeTemplate} selection={selection} selectionMode="multiple"
                onSelectionChange={event => setSelection(event.data)} className="company"></OrganizationChart>

            <h3>Basic</h3>
            <OrganizationChart value={data2}></OrganizationChart>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {OrganizationChart} from 'primereact/organizationchart';

const OrganizationChartDemo = () => {
    const [selection, setSelection] = useState([]);
    const data1 = [{
        label: 'CEO',
        type: 'person',
        className: 'p-person',
        expanded: true,
        data: {name:'Walter White', 'avatar': 'walter.jpg'},
        children: [
            {
                label: 'CFO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                children:[{
                    label: 'Tax',
                    className: 'department-cfo'
                },
                {
                    label: 'Legal',
                    className: 'department-cfo'
                }],
            },
            {
                label: 'COO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: {name:'Mike E.', 'avatar': 'mike.jpg'},
                children:[{
                    label: 'Operations',
                    className: 'department-coo'
                }]
            },
            {
                label: 'CTO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: {name:'Jesse Pinkman', 'avatar': 'jesse.jpg'},
                children:[{
                    label: 'Development',
                    className: 'department-cto',
                    expanded: true,
                    children:[{
                        label: 'Analysis',
                        className: 'department-cto'
                    },
                    {
                        label: 'Front End',
                        className: 'department-cto'
                    },
                    {
                        label: 'Back End',
                        className: 'department-cto'
                    }]
                },
                {
                    label: 'QA',
                    className: 'department-cto'
                },
                {
                    label: 'R&D',
                    className: 'department-cto'
                }]
            }
        ]
    }];

    const data2 = [{
        label: 'F.C Barcelona',
        expanded: true,
        children: [
            {
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'Chelsea FC'
                    },
                    {
                        label: 'F.C. Barcelona'
                    }
                ]
            },
            {
                label: 'Real Madrid',
                expanded: true,
                children: [
                    {
                        label: 'Bayern Munich'
                    },
                    {
                        label: 'Real Madrid'
                    }
                ]
            }
        ]
    }];

    const nodeTemplate = (node: any) => {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={\`showcase/demo/images/organization/\${node.data.avatar}\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style={{ width: '32px' }}/>
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        if (node.type === "department") {
            return node.label;
        }
    };

    return (
        <div className="organizationchart-demo">
            <h3>Advanced</h3>
            <OrganizationChart value={data1} nodeTemplate={nodeTemplate} selection={selection} selectionMode="multiple"
                onSelectionChange={(event: any) => setSelection(event.data)} className="company"></OrganizationChart>

            <h3>Basic</h3>
            <OrganizationChart value={data2}></OrganizationChart>
        </div>
    )
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
body .organizationchart-demo .company.p-organizationchart .p-organizationchart-node-content.p-person {
    padding: 0;
    border: 0 none;
}
body .organizationchart-demo .node-header, body .organizationchart-demo .node-content {
    padding: 0.5em 0.7em;
}
body .organizationchart-demo .node-header {
    background-color: #495ebb;
    color: #ffffff;
}
body .organizationchart-demo .node-content {
    text-align: center;
    border: 1px solid #495ebb;
}
body .organizationchart-demo .node-content img {
    border-radius: 50%;
}
body .organizationchart-demo .department-cfo {
    background-color: #7247bc;
    color: #ffffff;
}
body .organizationchart-demo .department-coo {
    background-color: #a534b6;
    color: #ffffff;
}
body .organizationchart-demo .department-cto {
    background-color: #e9286f;
    color: #ffffff;
}
body .organizationchart-demo .p-organizationchart .p-highlight {
    background-color: orange;
}
body .organizationchart-demo .p-person .p-node-toggler {
    color: #495ebb !important;
}
body .organizationchart-demo .department-cto .p-node-toggler {
    color: #8a0a39 !important;
}
            `
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {OrganizationChart} from 'primereact/organizationchart';

`}
                        </CodeHighlight>


                        <h3>Getting Started</h3>
                        <p>OrganizationChart requires a model of TreeNode as its value.</p>
                        <CodeHighlight className="language-javascript">
                            {`
export class OrganizationChartDemo extends Component {

    constructor() {
        super();
        this.state = {
            data: [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }]
        };
    }

    render() {
        return (
            <OrganizationChart value={this.state.data}></OrganizationChart>
        )
    }
}

`}
                        </CodeHighlight>

                        <h3>Templating</h3>
                        <p>Label of the treenode is displayed inside the node content by default and templating enables further customization.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<OrganizationChart value={this.state.data} nodeTemplate={this.nodeTemplate}></OrganizationChart>

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-javascript">
                            {`

nodeTemplate(node) {
    if (node.type === "person") {
        return (
            <div>
                <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={\`showcase/demo/images/organization/\${node.data.avatar}\`} style={{ width: '32px' }}/>
                    <div>{node.data.name}</div>
                </div>
            </div>
        );
    }

    if (node.type === "department") {
        return node.label;
    }
}
`}
                        </CodeHighlight>

                        <h3>Expand/Collapse State</h3>
                        <p>In order to display a treenode as expanded by default, set "expanded" property as true in your model.</p>

                        <h3>Selection</h3>
                        <p>OrganizationChart supports two selection methods; single or multiple. Selection is enabled by setting <i>selectionMode</i> property to the corresponding mode, defining <i>selection</i> property along with <i>selectionChange</i> callback.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<OrganizationChart value={this.state.data} selectionMode="single" selection={this.state.selectedNode} onSelectionChange={event => this.setState({selectedNode: event.data})}></OrganizationChart>

`}
                        </CodeHighlight>

                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>value</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of nested TreeNodes.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>selectionMode</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Defines the selection mode, valid values "single" and "multiple".</td>
                                    </tr>
                                    <tr>
                                        <td>selection</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>A single treenode instance or an array to refer to the selections.</td>
                                    </tr>
                                    <tr>
                                        <td>nodeTemplate</td>
                                        <td>function</td>
                                        <td>null</td>
                                        <td>Template function that gets a node as a parameter and returns a content.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Events</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onNodeSelect</td>
                                        <td>event.originalEvent: browser event <br />
                                    event.node: Selected node instance.</td>
                                        <td>Callback to invoke when a node is selected.</td>
                                    </tr>
                                    <tr>
                                        <td>onNodeUnselect</td>
                                        <td>event.originalEvent: browser event <br />
                                    event.node: Unselected node instance.</td>
                                        <td>Callback to invoke when a node is unselected.</td>
                                    </tr>
                                    <tr>
                                        <td>onSelectionChange</td>
                                        <td>event.originalEvent: browser event <br />
                                    event.data: New selection.</td>
                                        <td>Callback to invoke when node selection changes.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-organizationchart</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-table</td>
                                        <td>Table container of a node.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-lines</td>
                                        <td>Connector lines container.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-nodes</td>
                                        <td>Contained of node children.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-line-right</td>
                                        <td>Right side line of a node connector.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-line-left</td>
                                        <td>Left side line of a node connector.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-line-top</td>
                                        <td>Top side line of a node connector.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>

                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="OrganizationChartDemo" sources={[key, value]} extFiles={this.extFiles} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
