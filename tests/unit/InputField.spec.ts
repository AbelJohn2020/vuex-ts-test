import store from '@/store';
import { mount } from '@vue/test-utils';
import InputField from '../../src/components/UI/InputField.vue';

describe('Input field', () => { 
    const wrapper = mount(InputField, {
        slots: {
            default: `
                <input placeholder="Name" id="name" type="text" v-model="valueName"/>
            `,
        },
        props: {
            forLabel: 'name',
            validation: false
        },
        data() {
            return {
                valueName: '',
            };
        },
    });

    const inputValue = wrapper.find('input[type="text"]');
    const regex = store.state.regex;


    test('The default Slot in InputField will be Abel Antonio', async () => { 

        await inputValue.setValue('Abel Antonio');

        expect((inputValue.element as HTMLInputElement).value).toBe('Abel Antonio');
    });

    test('Should return Invalid Field', async () => { 

        await inputValue.setValue('Abel Antonio11');

        const isNotValid = mount(InputField, {...wrapper, props: {...wrapper.props(), validation: true}})
        const notValid = regex.test((inputValue.element as HTMLInputElement).value);

        expect(notValid).toBe(false);
        expect(isNotValid.find('p').element.textContent).toContain('invalid field');
     });

    test('should first', async () => { 
        await inputValue.setValue('Abel John');
        const valid = regex.test((inputValue.element as HTMLInputElement).value);
        const test = mount(InputField, {...wrapper, slots:{ default: '<input placeholder="Name" id="name" type="text" v-model="valueName"/>', valid: '<p>valid field</p>' }, props: {...wrapper.props()}})

        expect(valid).toBe(true);
        expect(test.find('p').element.textContent).toContain('valid fiel');
    });
 })