import { useContext } from 'react';
import { FaSpinner } from 'react-icons/fa'
import AppContext from '../AppContext';
import FadeIn from 'react-fade-in';

const LoadDataBaseSpinner = () => {
	
		const {currentUser} = useContext(AppContext);
		
		setAppMessage(prev => ( {...prev, ...{kind: 'none', message: ''} }))
		
	