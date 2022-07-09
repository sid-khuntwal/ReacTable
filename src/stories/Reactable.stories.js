import { Reactable } from "../Reactable";

export default {
    title: 'Reactable - A Customizable React Table Component',
    component: Reactable,
    argTypes: {
        rows: { control: '' },
        headers: { control: '' }
    },
};

const Template = args => <Reactable {...args} />;

export const Default = Template.bind({});
Default.args = {
    rows: [
        ['This', 'Is', 'A', 'React', 'Based'],
        ['UI', 'Component', 'Library', 'Component', 'Library'],
        ['This', 'Is', 'Designed', 'And', 'Developed'],
        ['By', 'Siddharth', 'Khuntwal', 'Reactable', 'ReacTable'],
    ],
    headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
};