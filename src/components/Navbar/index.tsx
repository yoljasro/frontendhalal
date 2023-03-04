// next image link components
import Image from "next/image";
import Link from "next/link";
// react
import React, { FC, ChangeEventHandler, useState } from "react";
// next intl
import { useTranslations } from "next-intl";
//styles
import styles from "./index.module.sass";

export const Navbar = () => {
  const t = useTranslations();

  return (
    <div className={styles.cont}>
      <ul className={styles.cont__menu}>
        <Link className={styles.cont__menu__link} href="/">
          <a>
            <li className={styles.cont__menu__link__main}>{t("main")}</li>
          </a>
        </Link>
        <Link className={styles.cont__menu__link} href={"/aboutUs"}>
          <a>
            <li>{t("our")}</li>
          </a>
        </Link>
        <Link className={styles.cont__menu__link} href="/restaurants">
          <a>
            <li>{t("restaurants")}</li>
          </a>
        </Link>
        <Link className={styles.cont__menu__link} href="#productions">
          <a>
            <li>{t("productive")}</li>
          </a>
        </Link>
        <Link className={styles.cont__menu__link} href="#chefs">
          <a>
            <li>{t("chef")}</li>
          </a>
        </Link>
        <Link className={styles.cont__menu__link} href="#members">
          <a>
            <li>{t("partners")}</li>
          </a>
        </Link>
        <Link className={styles.cont__menu__link} href="/halalMap">
          <a>
            <li>Халяль Гид</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};
