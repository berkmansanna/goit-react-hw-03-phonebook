import PropTypes from 'prop-types';
import styles from './Filter.module.css'

export const Filter = ({ value, changeFilter }) => {
    return (
        <label className={styles.filterLabel}>
            <span >
                Find contacts by name
            </span>
            <input
                value={value}
                onChange={changeFilter}
            />
        </label>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}

 