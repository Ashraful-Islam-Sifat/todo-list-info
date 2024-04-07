import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import './editor.scss';
import { select } from '@wordpress/data';

export default function Edit() {

	const data = useSelect((select)=> {
		const store = select('block-course/todos');
		if(!store) return null;
		return {
			total: store.getTodosNumber(),
			done: store.getDoneTodos(),
			undone: store.getUnDoneTodos()
		}
	})

	return (
		<div { ...useBlockProps() }>
			{!data && ( <p>{__(
				'Please make sure your plugin is active.',
				'todo-list-info'
			)}</p>  )}

			{data && (
				<ul>
					<li>
					{__('Done:', 'todo-list-info')} {data.done}
					</li>
					<li>
					{__('un-done:', 'todo-list-info')} {data.undone}
					</li>
					<li>
					{__('Total:', 'todo-list-info')} {data.total}
					</li>
				</ul>
			)}
		</div>
	);
}
