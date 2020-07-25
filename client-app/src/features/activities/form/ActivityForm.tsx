import React, {useState, FormEvent, useContext} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import {v4 as uuid} from 'uuid'
import ActivityStore from '../../../app/stores/ActivityStore'
import { observer } from 'mobx-react-lite'

interface IProp {
    activity: IActivity;
}

const ActivityForm: React.FC<IProp> = ({activity: initialFormState}) => {

    const activityStore = useContext(ActivityStore);
    const {createActivity, editActivity, submitting, cancelFormOpen} = activityStore;

    const initializeForm = () => {
        if(initialFormState) {
            return initialFormState;
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            };
        }
    }; 

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    const handleSubmit =() => {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity, 
                id: uuid()
            }
            createActivity(newActivity);
        } else {
            editActivity(activity);
        }

    }

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        setActivity({...activity, [name]: value});
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Title' onChange={handleInputChange} name='title' value={activity.title} />
                <Form.TextArea rows={2} placeholder='Description' onChange={handleInputChange} name='description' value={activity.description} />
                <Form.Input placeholder='Category' onChange={handleInputChange} name='category' value={activity.category} />
                <Form.Input type='datetime-local' placeholder='Date' onChange={handleInputChange} name='date' value={activity.date} />
                <Form.Input placeholder='City' onChange={handleInputChange} name='city' value={activity.city} />
                <Form.Input placeholder='Venue' onChange={handleInputChange} name='venue' value={activity.venue} />
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button onClick={cancelFormOpen} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default observer(ActivityForm)
