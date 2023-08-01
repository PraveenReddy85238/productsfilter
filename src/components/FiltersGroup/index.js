import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderSearchInput = () => (
    <div className="search-input-container">
      <input type="search" className="search-input" />
      <BsSearch />
    </div>
  )

  const renderCategoryList = () => {
    const {categoryOptions, updateCategoryInState} = props
    const onClickCategoryItem = id => {
      updateCategoryInState(id)
    }

    return (
      <ul>
        <h1 className="category-heading">Category</h1>
        {categoryOptions.map(eachOption => (
          <li
            className="list-items-container"
            onClick={onClickCategoryItem(eachOption.categoryId)}
          >
            <p>{eachOption.name}</p>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      {renderSearchInput()}
      {renderCategoryList()}
    </div>
  )
}

export default FiltersGroup
