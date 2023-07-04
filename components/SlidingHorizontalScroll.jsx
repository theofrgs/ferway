import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/SlidingHorizontalScroll.module.css';
import { VscEllipsis } from 'react-icons/vsc';
import { AiOutlineEye } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { GrTextAlignFull } from 'react-icons/gr';

const SlidingHorizontalScroll = ({ itemList, setItems }) => {
  const [listIsEditing, setListIsEditing] = useState(false);
  const [inputListValue, setInputListValue] = useState('');

  function deleteItem(index) {
    const updatedItems = [...itemList];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  const handleInputListValueChange = (event) => {
    setInputListValue(event.target.value);
  };


  const ListDetails = ({ item, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    function addCard(index) {
      const itemFromList = itemList[index];
      console.log(itemFromList);
      itemFromList.cards = [...itemFromList.cards, {
        title: inputValue,
        description: "",
        folow: false
      }];
      const updatedItems = [...itemList];
      updatedItems.splice(index, 1, itemFromList);
      setItems(updatedItems);
    }

    return (
      <div key={index} className={styles.item}>
        <div className={styles.topItemBar}>
          <div className={styles.title}>
            {item.title}
          </div>
          <button className={styles.treeButton} onClick={() => deleteItem(index)}> <VscEllipsis style={{ fontSize: '2rem' }} />
          </button>
        </div>
        {item.cards.map((it, i) => (
          <div key={i}
            className={styles.card}>
            <div className={styles.title}>
              {it.title}
            </div>
            <div className={styles.title}>
              {it.folow ?
                <AiOutlineEye style={{ color: 'grey', fontSize: '1.5rem' }} /> : null}
              {it.description ?
                <GrTextAlignFull style={{ paddingLeft: '7px', color: 'grey', fontSize: '1.5rem' }} /> : null}
            </div>
          </div>
        ))}

        {!isEditing ?
          <div
            className={styles.cardAdd}
            onClick={() => setIsEditing(!isEditing)}
          >
            <div className={styles.title}>
              + Ajouter un carte
            </div>
          </div>
          : <div>
            <div
              className={styles.cardCreate}>
              <input value={inputValue}
                onChange={handleInputChange} type="text" className={styles.input} placeholder="Saissez un titre pour cette carte . . ." />
            </div>
            <button className={styles.button} onClick={() => addCard(index)}>Ajouter une carte</button>
            <button className={styles.crossButton} onClick={() => setIsEditing(!isEditing)}> <RxCross1 style={{ paddingTop: '10px', fontSize: '2rem' }} />
            </button>

          </div>}
      </div>
    )
  }

  function addItem() {
    if (inputListValue === "")
      return
    setItems([...itemList, {
      title: inputListValue,
      cards: []
    }]);
  }

  return (
    <div
      className={styles.container}
    >
      <div className={styles.scrollContainer} >
        {itemList.map((item, index) => (
          <ListDetails item={item} index={index} />
        ))}

        {!listIsEditing ?
          <div className={styles.createList} onClick={() => setListIsEditing(!listIsEditing)}>
            <div className={styles.topItemBar}>
              <div className={styles.title} style={{ color: "white" }}>
                + Ajouter une autre liste
              </div>
            </div>
          </div>
          : <div
            className={styles.item} style={{ padding: '0px', minHeight: '0px', height: '110px' }}>
            <div >
              <input value={inputListValue}
                onChange={handleInputListValueChange} type="text" style={{ margin: '5px', padding: '10px', width: '390px' }} placeholder="Saissez un titre pour cette liste . . ." />
            </div>
            <div style={{ padding: '10px', paddingTop: '0px' }}>
              <button className={styles.button} onClick={() => addItem()}>Ajouter une liste</button>
              <button className={styles.crossButton} onClick={() => setListIsEditing(!listIsEditing)}> <RxCross1 style={{ paddingTop: '10px', fontSize: '2rem' }} />
              </button>
            </div>
          </div>}
      </div>
    </div >
  );
};

export default SlidingHorizontalScroll;
